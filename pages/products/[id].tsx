import { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import ProductImages from "../../components/pages/ProductPage/Images";
import Select from "../../components/Select";
import BellSVG from "../../public/icons/bell.svg";
import CartAddSVG from "../../public/icons/cart-add.svg";
import CartEmptySVG from "../../public/icons/cart-empty.svg";
import EmailSVG from "../../public/icons/email.svg";
import FullStarSVG from "../../public/icons/full-star.svg";
import HalfStarSVG from "../../public/icons/half-star.svg";
import { getAllProducts } from "../../utils/products";
import { Product as P } from "../../utils/types";

type props = { product: P };

export default function Product({ product }: props) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1></h1>;
  }

  const enStock = !!product.quantite;
  return (
    <Layout>
      <Container>
        <section className="w-full max-w-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-10 md:gap-4 md:bg-linear-1 items-start justify-between">
          <ProductImages medias={product.media} />
          <div className="w-full flex flex-col justify-start items-start space-y-5 my-4">
            <h1 className="text-4xl font-bold">{product.nom}</h1>
            {/* Price & Review */}
            <div className="flex flex-row justify-start items-center pb-6">
              <span className="text-xl mr-14">{product.prix} €</span>
              <div className="flex flex-row space-x-1 items-center">
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <HalfStarSVG className="w-6 h-6" />
              </div>
            </div>
            {enStock ? <AddToCartSection /> : <NoStockSection />}
            <h2 className="text-xl font-bold">Description</h2>
            <p className="overflow-ellipsis overflow-hidden w-full prose">
              {product.descriptionSummary.split(/\s/).slice(0, 30).join(" ")}
              ...
              <a
                href="#description"
                style={{ textDecoration: "none !important" }}
                className="ml-4"
              >
                <span className="text-blue-400 font-bold cursor-pointer">
                  voir plus
                </span>
              </a>
            </p>
          </div>
        </section>
        {/* Full descript */}
        <article
          id="description"
          className="my-48 overflow-ellipsis overflow-hidden w-full prose"
        >
          <h2 className="text-xl font-bold">Détails</h2>
          {/* TODO: compile Markdown to HTML */}
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </article>
      </Container>
    </Layout>
  );
}

const AddToCartSection = () => (
  <div className="w-full flex flex-row items-center space-x-3 pb-6">
    <Select innerClassName="bg-gray-50" className="min-w-max">
      {/* TODO: make option from 1 to product.quantite */}
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </Select>
    <Button className="flex-1">
      <span>Ajouter au panier</span>
      <CartAddSVG className="w-6" />
    </Button>
  </div>
);
const NoStockSection = () => (
  <div className="w-full flex flex-row items-center space-x-3 pb-6">
    <Button fill="primary" className="flex-shrink-0">
      <BellSVG className="w-6 text-white" />
    </Button>
    <Button fill="primary" className="flex-shrink-0">
      <EmailSVG className="w-6 text-white" />
    </Button>
    <Button fill="outline" disabled className="flex-1">
      <span>Produit indisponible</span>
      <CartEmptySVG className="w-6" />
    </Button>
  </div>
);
export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<props>> {
  const allProducts = await getAllProducts();

  return {
    props: {
      product: allProducts.find((p) => p.id == params.id),
    }, // will be passed to the page component as props
    revalidate: 1, // refresh data on request at least every second
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  return {
    paths: allProducts.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: "blocking",
  };
}
