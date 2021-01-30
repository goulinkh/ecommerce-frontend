import config from 'config';
import marked from 'marked';
import { parse } from 'node-html-parser';
import { cachedFetch } from './common';
import { Media, Product } from './types';

export function getProductsByCatalogue(
  products: Product[],
  catalogueName: string
): Product[] {
  return products.filter((p) =>
    p.categories.find((c) => !!c.name.match(new RegExp(catalogueName, 'g')))
  );
}

export async function getAllProducts(): Promise<Product[]> {
  const produits = await cachedFetch<Product[]>(
    new URL('/produits', config.strapiURL).href
  );
  return produits.map((p: Product) => ({
    ...p,
    ...parseDescription(p.description),
    media: (p.media || []).map(parseMedia),
  }));
}

export function parseProduit(p: Product): Product {
  return { ...p, media: (p.media || []).map(parseMedia) };
}

function parseMedia(m: Media): Media {
  let type;
  if (m.mime.match(/^image/)) type = 'image';
  if (m.mime.match(/^video/)) type = 'video';
  else type = 'unsupported';
  return { ...m, url: cmsURL(m.url), type };
}

function cmsURL(url: string) {
  return new URL(url, config.strapiURL).href;
}

function parseDescription(markdownDescription: string) {
  const html = marked(markdownDescription);
  const root = parse(html);
  const imgs = root.querySelectorAll('img');
  imgs.forEach((img) => {
    img.setAttribute('src', cmsURL(img.getAttribute('src')));
  });
  const descriptionSummary = root
    .querySelectorAll('p')
    .map((e) => e.innerText)
    .join(' ');
  return { description: root.toString(), descriptionSummary };
}
