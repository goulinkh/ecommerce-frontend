import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllProducts } from "../../utils/products";
import { Product } from "../../utils/types";

export default function CategoryAll({ products }: { products: Product[] }) {
  return (
    <Layout>
      <h1>Categorie -{">"} Tout</h1>
      <ul className="flex flex-col md:flex-row  space-x-8 overflow-y-auto p-2">
        {products.map((p, i) => (
          <Link key={i} href={`/products/${p.id}`}>
            <li className="rounded-lg bg-white shadow-md cursor-pointer">
              <div className=" flex flex-col overflow-hidden w-52 items-start justify-center">
                <div className="relative w-full h-52  overflow-h rounded">
                  <Image
                    src={p.media[0]?.url}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="pl-4 py-3">{p.nom}</p>
                <p className="pl-4 pb-6">{p.prix} €</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
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
