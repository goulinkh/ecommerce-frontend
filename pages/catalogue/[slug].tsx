import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllCategories } from "../../utils/catagories";
import { getAllProducts } from "../../utils/products";
import { Category as C, Product } from "../../utils/types";

export default function Category({
  products,
  category,
}: {
  products: Product[];
  category: C;
}) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout navbarOverlap>
      {/* cover */}
      <div className="relative w-screen h-80">
        <Image
          objectFit="cover"
          layout="fill"
          src="/images/catalogue-cover.png "
        ></Image>
      </div>
      <h1>
        Categorie -{">"} {category.name[0].toUpperCase()}
        {category.name.substr(1)}
      </h1>
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
  const allCategories = await getAllCategories();

  return {
    props: {
      products:
        allProducts ||
        [].filter((p) => p.categories.find((c) => c.id == params.slug)),
      category: allCategories.find((c) => c.id == params.slug),
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories.map((category) => ({
      params: { slug: String(category.id) },
    })),
    fallback: false, // Will return 404 if id doesn't exist in the list
  };
}
