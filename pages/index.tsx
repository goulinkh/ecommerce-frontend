import HomePage from "../components/pages/HomePage";
import { getAllProducts } from "../utils/products";

export default function Index(props) {
  return <HomePage {...props} />;
}

export async function getStaticProps({ params }) {
  const allProducts = await getAllProducts();
  const decorationProducts = allProducts.filter((p) =>
    p.categories.find((c) => !!c.name.match(/décoration/g))
  );

  return {
    props: {
      products: allProducts,
      decorationProducts: decorationProducts,
    }, // will be passed to the page component as props
  };
}
