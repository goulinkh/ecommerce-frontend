import Container from 'components/Container';
import Layout from 'components/Layout';
import CoverPhoto from 'components/pages/Catalogue/CoverPhoto';
import NavTools from 'components/pages/Catalogue/NavTools';
import ProductCard from 'components/ProductCard';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllCatalogues } from 'utils/catalogues';
import { getAllProducts, getProductsByCatalogue } from 'utils/products';
import { Catalogue as C, Product } from 'utils/types';

type props = {
  products: Product[];
  catalogue: C;
  allCatalogues: C[];
};

const Catalogue: React.FC<props> = function ({ products, allCatalogues }) {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
  return (
    <Layout navbarOverlap>
      {/* cover */}
      <CoverPhoto />
      <Container className="flex flex-row my-14">
        <NavTools allCatalogues={allCatalogues} />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
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
};

export default Catalogue;

const customCatalogues = (allProducts) => [
  {
    id: 0,
    name: 'Tout',
    produits: allProducts,
  },
  {
    id: -1,
    name: 'promotion %',
    produits: allProducts.filter((p) => !!p.promotion),
  },
];

export const getStaticProps: GetStaticProps<props> = async function ({
  params,
}) {
  let allProducts = await getAllProducts();
  const newCatalogues = customCatalogues(allProducts);
  const allCatalogues = [...newCatalogues, ...(await getAllCatalogues())];
  allProducts = allProducts.map((p) => ({
    ...p,
    categories: [
      ...p.categories,
      ...allCatalogues.filter((c) =>
        c.produits.find((catalogueProduct) => p.id === catalogueProduct.id)
      ),
    ],
  }));
  const catalogue = allCatalogues.find((c) => String(c.id) == params.id);
  return {
    props: {
      products: getProductsByCatalogue(allProducts || [], catalogue.name),
      catalogue,
      allCatalogues,
    },
    revalidate: 10, // refresh on request at least every 10 seconds
  };
};

export const getStaticPaths: GetStaticPaths = async function () {
  const allCatalogues = await getAllCatalogues();
  return {
    paths: [
      ...allCatalogues.map((catalogue) => ({
        params: { id: String(catalogue.id) },
      })),
      { params: { id: '0' } },
    ],
    fallback: 'blocking',
  };
};
