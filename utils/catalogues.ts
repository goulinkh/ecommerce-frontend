import config from 'config';
import { parseProduit } from './products';
import { Catalogue } from './types';

let cache: Catalogue[] = null;

export async function getAllCatalogues(): Promise<Catalogue[]> {
  if (cache) return cache;
  const response = await fetch(new URL('/categories', config.strapiURL).href);
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  cache = await (await response.json())?.map((c: Catalogue) => ({
    ...c,
    produits: (c.produits || []).map(parseProduit),
  }));
  console.log('catalogue cache updated');
  return cache;
}
export async function getCatalogueByName(name: string): Promise<Catalogue> {
  const response = await fetch(
    new URL(`/categories/name/${name}`, config.strapiURL).href
  );
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  let catalogue: Catalogue = await response.json();
  catalogue = { ...catalogue, produits: catalogue.produits.map(parseProduit) };
  return catalogue;
}
