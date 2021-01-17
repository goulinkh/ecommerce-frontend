import HomePage from "../components/HomePage";
import { getAllProducts } from "../utils/products";

export default function Index(props) {
  return <HomePage {...props} />;
}

export async function getStaticProps({ params }) {
  const allProducts = await getAllProducts();

  return {
    props: {
      products: allProducts,
    }, // will be passed to the page component as props
  };
}
