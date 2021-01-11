import config from "../config";
import { parseProduit } from "./products";
import { Category } from "./types";

let cache: Promise<Category[]> = null;

export async function getAllCategories(): Promise<Category[]> {
  if (cache) return cache;
  const response = await fetch(new URL("/categories", config.strapiURL).href);
  if (response.status >= 400) {
    throw new Error(`Strapi Server returned status code ${response.status}`);
  }
  cache = (await response.json())?.map((c: Category) => ({
    ...c,
    produits: (c.produits || []).map(parseProduit),
  }));
  return cache;
}
