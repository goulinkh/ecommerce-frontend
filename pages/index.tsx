import { useRouter } from "next/router";
import HomePage from "../components/pages/HomePage";
import { getAllProducts, getProductsByCatalogue } from "../utils/products";

export default function Index(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
  return <HomePage {...props} />;
}

export async function getStaticProps({ params }) {

  const allProducts = await getAllProducts();
  const decorationProducts = getProductsByCatalogue(allProducts, "décoration");
  return {
    props: {
      products: allProducts,
      decorationProducts: decorationProducts,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
