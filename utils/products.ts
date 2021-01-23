import marked from "marked";
import config from "../config";
import { Media, Product } from "./types";
import { parse } from "node-html-parser";

let cache: Promise<Product[]> = null;

export async function getAllProducts(): Promise<Product[]> {
  if (cache) return cache;
  const response = await fetch(new URL("/produits", config.strapiURL).href);
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  cache = (await response.json())?.map((p: Product) => ({
    ...p,
    ...parseDescription(p.description),
    media: (p.media || []).map(parseMedia),
  }));
  return cache;
}

export function parseProduit(p: Product): Product {
  return { ...p, media: (p.media || []).map(parseMedia) };
}

function parseMedia(m: Media): Media {
  let type;
  if (!!m.mime.match(/^image/)) type = "image";
  if (!!m.mime.match(/^video/)) type = "video";
  else type = "unsupported";
  return { ...m, url: cmsURL(m.url), type };
}

function cmsURL(url: string) {
  return new URL(url, config.strapiURL).href;
}

function parseDescription(markdownDescription: string) {
  const html = marked(markdownDescription);
  const root = parse(html);
  const imgs = root.querySelectorAll("img");
  imgs.forEach((img) => {
    img.setAttribute("src", cmsURL(img.getAttribute("src")));
  });
  const descriptionSummary = root
    .querySelectorAll("p")
    .map((e) => e.innerText)
    .join(" ");
  return { description: root.toString(), descriptionSummary };
}
