import config from 'config';
import { cachedFetch } from './common';
import { parseProduit } from './products';
import { Catalogue } from './types';

export async function getAllCatalogues(): Promise<Catalogue[]> {
  const catalogues = await cachedFetch<Catalogue[]>(
    new URL('/categories', config.strapiURL).href
  );
  return await catalogues?.map((c: Catalogue) => ({
    ...c,
    produits: (c.produits || []).map(parseProduit),
  }));
}

export async function getCatalogueByName(name: string): Promise<Catalogue> {
  let catalogue = await cachedFetch<Catalogue>(
    new URL(`/categories/name/${name}`, config.strapiURL).href
  );
  catalogue = { ...catalogue, produits: catalogue.produits.map(parseProduit) };
  return catalogue;
}
