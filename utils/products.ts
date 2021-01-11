import { parse } from "path";
import config from "../config";
import { Media, Product } from "./types";

let cache: Promise<Product[]> = null;

export async function getAllProducts(): Promise<Product[]> {
  if (cache) return cache;
  const response = await fetch(new URL("/produits", config.strapiURL).href);
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  cache = (await response.json())?.map((p: Product) => ({
    ...p,
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
  return { ...m, url: new URL(m.url, config.strapiURL).href, type };
}
