import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../utils/products";
import { Product } from "../../utils/types";

export default function CategoryAll({ products }: { products: Product[] }) {
  return (
    <Layout>
      <h1>Categorie -{">"} Tout</h1>
      <div className="flex flex-col md:flex-row  space-x-8 overflow-y-auto p-2">
        {products.map((p, i) => (
          <Link key={i} href={`/products/${p.id}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allProducts = await getAllProducts();

  return {
    props: {
      products: allProducts,
    }, // will be passed to the page component as props
  };
}
