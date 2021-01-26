import { GetStaticPropsResult } from "next";
import Container from "../../../components/Container";
import Layout from "../../../components/Layout";
import ProductCard from "../../../components/ProductCard";
import { getAllCatalogues } from "../../../utils/catalogues";
import {
  getAllProducts,
  getProductsByCatalogue,
} from "../../../utils/products";
import { Catalogue as C, Product } from "../../../utils/types";
import CoverPhoto from "../../../components/pages/Catalogue/CoverPhoto";
import NavTools from "../../../components/pages/Catalogue/NavTools";

type props = {
  products: Product[];
  catalogue: C;
  allCatalogues: C[];
};

export default function Catalogue({
  products,
  catalogue,
  allCatalogues,
}: props) {
  return (
    <Layout navbarOverlap>
      {/* cover */}
      <CoverPhoto />
      <Container className="flex my-14">
        <NavTools allCatalogues={allCatalogues} />
        <div className="w-full grid grid-cols-4 gap-10 p-4">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              product={p}
              variant="transparent"
              className="transition transform hover:scale-110"
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<props>> {
  let allProducts = await getAllProducts();
  const catalogueTout = {
    id: 0,
    name: "Tout",
    produits: allProducts,
  };
  allProducts = allProducts.map((p) => ({
    ...p,
    categories: [...p.categories, catalogueTout],
  }));
  const allCatalogues = [catalogueTout, ...(await getAllCatalogues())];
  const catalogue = allCatalogues.find((c) => c.id == params.id);
  return {
    props: {
      products: getProductsByCatalogue(allProducts || [], catalogue.name),
      catalogue,
      allCatalogues,
    },
  };
}

export async function getStaticPaths() {
  const allCatalogues = await getAllCatalogues();
  return {
    paths: [
      ...allCatalogues.map((catalogue) => ({
        params: { id: String(catalogue.id) },
      })),
      { params: { id: "0" } },
    ],
    fallback: false, // Will return 404 if id doesn't exist in the list
  };
}
