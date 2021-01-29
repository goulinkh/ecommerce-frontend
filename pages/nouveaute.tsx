import Container from 'components/Container';
import Layout from 'components/Layout';
import CoverPhoto from 'components/pages/Catalogue/CoverPhoto';
import ProductCard from 'components/ProductCard';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { getCatalogueByName } from 'utils/catalogues';
import { Catalogue, Product } from 'utils/types';

type props = {
  products: Product[];
  catalogue: Catalogue;
};

const Nouveaute: React.FC<props> = function ({ products, catalogue }) {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
  return (
    <Layout navbarOverlap>
      {/* cover */}
      <CoverPhoto special />
      <Container className="flex flex-row my-14">
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
export default Nouveaute;

export const getStaticProps: GetStaticProps<props> = async function ({
  params,
}) {
  const nouveauteCatalogue = await getCatalogueByName('nouveauté');
  return {
    props: {
      products: nouveauteCatalogue.produits,
      catalogue: nouveauteCatalogue,
    },
    revalidate: 10, // refresh on request at least every 10 seconds
  };
};
