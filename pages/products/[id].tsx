import Image from "next/image";
import Layout from "../../components/Layout";
import { getAllProducts } from "../../utils/products";
import { Product as P } from "../../utils/types";
import cls from "classnames";
import CartAddSVG from "../../public/icons/cart-add.svg";
import Button from "../../components/Button";
import ProductImages from "../../components/pages/ProductPage/Images";
import Container from "../../components/Container";
export default function Product({ product }: { product: P }) {
  const enStock = !!product.quantite;
  return (
    <Layout>
      <Container>
        <section className="grid grid-cols-2 gap-4">
          <ProductImages firstImage={product.media[0]} images={product.media} />
          <div>2</div>
        </section>
      </Container>
      {/* <div className=" flex flex-row overflow-hidden h-72 space-x-24 items-start justify-center">
        <div className="relative w-60 h-full  overflow-h rounded">
          <Image src={product.media[0]?.url} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className=" font-bold text-xl">{product.nom}</p>
          <p className="">{product.prix} €</p>
          <p className={cls("text-sm", { "text-green-600": enStock })}>
            {enStock ? "En Stock" : "En repture"} €
          </p>
          {enStock && (
            <Button fill="linear">
              Ajouter au panier <CartAddSVG className="w-6 h-6 m l-4 text-white" />
            </Button>
          )}
        </div>
      </div> */}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allProducts = await getAllProducts();

  return {
    props: {
      product: allProducts.find((p) => p.id == params.id),
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  return {
    paths: allProducts.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: false, // Will return 404 if id doesn't exist in the list
  };
}
