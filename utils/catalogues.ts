import config from 'config';
import { parseProduit } from './products';
import { Catalogue } from './types';

let cache: Promise<Catalogue[]> = null;

export async function getAllCatalogues(): Promise<Catalogue[]> {
  if (cache) return cache;
  const response = await fetch(new URL('/categories', config.strapiURL).href);
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  cache = (await response.json())?.map((c: Catalogue) => ({
    ...c,
    produits: (c.produits || []).map(parseProduit),
  }));
  return cache;
}
