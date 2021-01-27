import HomePage from 'components/pages/HomePage';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getAllProducts, getProductsByCatalogue } from 'utils/products';
import { Product } from 'utils/types';

type props = {
  products: Product[];
  decorationProducts: Product[];
};

const Index: React.FC<props> = function (props) {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
  return <HomePage {...props} />;
};

export default Index;

export const getStaticProps: GetStaticProps<props> = async function getStaticProps() {
  const allProducts = await getAllProducts();
  const decorationProducts = getProductsByCatalogue(allProducts, 'décoration');
  return {
    props: {
      products: allProducts,
      decorationProducts: decorationProducts,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
};
