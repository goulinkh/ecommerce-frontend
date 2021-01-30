import Button from 'components/Button';
import Container from 'components/Container';
import Layout from 'components/Layout';
import CoverPhoto from 'components/pages/Catalogue/CoverPhoto';
import NavTools from 'components/pages/Catalogue/NavTools';
import ProductCard from 'components/ProductCard';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getAllCatalogues } from 'utils/catalogues';
import { getAllProducts, getProductsByCatalogue } from 'utils/products';
import { Catalogue as C, Product } from 'utils/types';

type props = {
  products: Product[];
  catalogue: C;
  allCatalogues: C[];
};

const Catalogue: React.FC<props> = function ({
  products,
  allCatalogues,
  catalogue,
}) {
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
        {products.length ? (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:p-4">
            {products.map((p, i) => (
              <ProductCard
                key={i}
                product={p}
                variant="transparent"
                className="transition transform hover:scale-110"
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center space-y-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Nous n&apos;avons pas encore de stock pour le catalogue{' '}
              {catalogue.name}
            </h1>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full items-center justify-center md:h-72">
              <div className="flex flex-col items-center space-y-10 md:space-y-5 md:space-y-20">
                <h2 className="text-3xl md:text-4xl">
                  Vous avez un besoin spécifique ?
                </h2>
                <Button>Contacter nous</Button>
              </div>
              <div className="w-full h-52 md:h-full relative mb-10 md:mb-0">
                <Image
                  src="/images/wood-hand-work.png"
                  alt="Travail artisanal"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        )}
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
