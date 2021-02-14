import cls from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import Layout from 'components/Layout';
import AddToCartButton from 'components/pages/ProductPage/AddToCartButton';
import ProductImages from 'components/pages/ProductPage/Images';
import Tooltip from 'components/Tooltip';
import { CartActionKind, CartContext } from 'context/cart';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import BellSVG from 'public/icons/bell.svg';
import CartEmptySVG from 'public/icons/cart-empty.svg';
import EmailSVG from 'public/icons/email.svg';
import FullStarSVG from 'public/icons/full-star.svg';
import HalfStarSVG from 'public/icons/half-star.svg';
import MinusSVG from 'public/icons/minus.svg';
import PlusSVG from 'public/icons/plus.svg';
import { useContext, useState } from 'react';
import { getAllProducts, getTotalPriceWithPromo } from 'utils/products';
import { Product as P } from 'utils/types';
type props = { product: P };

const Product: React.FC<props> = function ({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <></>;
  }
  const price = getTotalPriceWithPromo(product);

  const enStock = !!product.quantite;
  return (
    <Layout>
      <Container>
        <section className="w-full max-w-full flex flex-col md:grid md:grid-rows-none md:grid-cols-2 gap-10 md:gap-4 md:bg-linear-1 items-start justify-between">
          <ProductImages medias={product.media} />
          <div className="w-72 md:w-full flex flex-col justify-start items-start space-y-5 my-4">
            <h1 className="text-4xl font-bold">{product.nom}</h1>
            {/* Price & Review */}
            <div className="flex flex-row justify-between items-center w-full pb-6">
              {!price.isOnPromo ? (
                <span className="text-xl mr-14">{product.prix} €</span>
              ) : (
                <div className="flex flex-row items-center space-x-2">
                  <p className="text-blue-400 font-bold text-xl">
                    {price.price} €
                  </p>
                  <p className="text-sm text-gray-700 line-through">
                    {price.originalPrice} €
                  </p>
                </div>
              )}
              <div className="flex flex-row space-x-1 items-center">
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <FullStarSVG className="w-6 h-6" />
                <HalfStarSVG className="w-6 h-6" />
              </div>
            </div>
            {enStock ? (
              <AddToCartSection product={product} />
            ) : (
              <NoStockSection />
            )}
            <h2 className="text-xl font-bold">Description</h2>
            <p>
              <span className="overflow-ellipsis overflow-hidden w-full prose">
                {product.descriptionSummary.split(/\s/).slice(0, 30).join(' ')}
                ...
              </span>
              <a href="#description" className="ml-4 no-underline">
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
          className="my-48 overflow-ellipsis overflow-hidden w-full max-w-full min-w-full prose"
        >
          <h2 className="text-xl font-bold">Détails</h2>
          {/* TODO: compile Markdown to HTML */}
          <div
            dangerouslySetInnerHTML={{ __html: product.description }}
            className="w-full"
          ></div>
        </article>
      </Container>
    </Layout>
  );
};

const AddToCartSection = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const canSubtract = quantity > 1;
  const productInCartQuantity =
    cart.items.find((i) => i.product.id === product.id)?.quantity || 0;
  const canAddQuantity =
    product.quantite == -1 ||
    quantity + productInCartQuantity < product.quantite;
  const canAddToCart =
    product.quantite == -1 ||
    quantity + productInCartQuantity <= product.quantite;

  return (
    <div className="w-full flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 pb-6">
      <div className="flex flex-row items-center justify-between bg-white rounded shadow h-11 transition-all ">
        <div
          className={cls('p-2 ', {
            'opacity-50': !canSubtract,
            'hover:bg-gray-100 rounded': canSubtract,
          })}
          onClick={() => canSubtract && setQuantity(quantity - 1)}
          role="button"
          aria-hidden
        >
          <MinusSVG className="w-5 h-5" />
        </div>
        <span className="text-lg w-6 text-center select-none">{quantity}</span>
        <div
          className={cls('p-2', {
            'opacity-50': !canAddQuantity,
            'transition-all hover:bg-gray-100 rounded': canAddQuantity,
          })}
          onClick={() => canAddQuantity && setQuantity(quantity + 1)}
          role="button"
          aria-hidden
        >
          <PlusSVG className="w-5 h-5" />
        </div>
      </div>
      <AddToCartButton
        className="flex-1 w-full"
        disabled={!canAddToCart}
        onClick={() =>
          dispatch({
            type: CartActionKind.Add,
            payload: { product, quantity },
          })
        }
      />
    </div>
  );
};

const NoStockSection = () => (
  <div className="w-full flex flex-row items-center space-x-3 pb-6">
    <Tooltip tooltipContent="Recevoir une notification">
      <Button fill="primary" className="flex-shrink-0">
        <BellSVG className="w-6 text-white" />
      </Button>
    </Tooltip>
    <Tooltip tooltipContent="Recevoir un mail, quand il sera en stock">
      <Button fill="primary" className="flex-shrink-0">
        <EmailSVG className="w-6 text-white" />
      </Button>
    </Tooltip>
    <Button fill="outline" disabled className="flex-1">
      <span>Produit indisponible</span>
      <CartEmptySVG className="w-6" />
    </Button>
  </div>
);
export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<props>> => {
  const allProducts = await getAllProducts();

  return {
    props: {
      product: allProducts.find((p) => String(p.id) == params.id),
    }, // will be passed to the page component as props
    revalidate: 1, // refresh data on request at least every second
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await getAllProducts();
  return {
    paths: allProducts.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: 'blocking',
  };
};

export default Product;
