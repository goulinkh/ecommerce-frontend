import { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import CoverPhoto from "../../components/pages/Catalogue/CoverPhoto";
import NavTools from "../../components/pages/Catalogue/NavTools";
import ProductCard from "../../components/ProductCard";
import { getAllCatalogues } from "../../utils/catalogues";
import { getAllProducts, getProductsByCatalogue } from "../../utils/products";
import { Catalogue as C, Product } from "../../utils/types";

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
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
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
    revalidate: 10, // refresh on request at least every 10 seconds
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
    fallback: "blocking",
  };
}
