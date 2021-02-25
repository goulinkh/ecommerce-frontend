import cls from 'classnames';
import Button from 'components/Button';
import Container from 'components/Container';
import Image from 'components/Image';
import Layout from 'components/Layout';
import { Cart as C, CartActionKind, CartContext } from 'context/cart';
import MinusSVG from 'public/icons/minus.svg';
import PlusSVG from 'public/icons/plus.svg';
import TrashSVG from 'public/icons/trash.svg';
import { useContext } from 'react';
import { getTotalPriceWithPromo } from 'utils/products';

const Cart: React.FC = function () {
  const { cart, dispatch } = useContext(CartContext);
  const productsPrices = {};
  cart.items.forEach((i) => {
    productsPrices[i.product.id] = getTotalPriceWithPromo(i.product);
  });
  const total = getTotalPrice(cart, productsPrices);
  return (
    <Layout className="h-screen flex flex-col justify-between ">
      <Container className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-12 w-full md:h-3/5 py-6">
        <div className="rounded-lg shadow-md bg-white p-5 flex flex-col w-full md:h-3/5">
          <div className="font-bold flex flex-row items-center justify-between mb-5">
            <h2 className="text-2xl">Votre panier</h2>
            <span>Prix total: {total} €</span>
          </div>
          <div className="overflow-y-auto">
            {cart.items.map((item, i) => {
              const canSubtract = item.quantity > 1;

              const canAddQuantity =
                item.product.quantite == -1 ||
                item.quantity < item.product.quantite;
              const productPrice = productsPrices[item.product.id];
              return (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between w-full space-x-5 h-40 border-b py-8 pr-4 border-gray-400 last:border-0"
                >
                  <div className="relative w-32 h-32 rounded">
                    <Image
                      src={item.product.media[0].url}
                      alt={item.product.nom}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-full grid grid-rows-2 items-center flex-1">
                    <p>{item.product.nom}</p>
                    <p className="text-sm text-gray-600">
                      Prix unité:{' '}
                      <span
                        className={cls({
                          'text-blue-400': productPrice.isOnPromo,
                        })}
                      >
                        {productPrice.price} €
                      </span>
                    </p>
                  </div>
                  <div className="h-full grid grid-rows-2  items-center">
                    <div className="flex flex-row items-center justify-between bg-white rounded shadow h-11 transition-all px-2">
                      <div
                        className={cls('p-1 hover:bg-gray-100 rounded', {
                          'hover:text-red-500': !canSubtract,
                        })}
                        onClick={() => {
                          if (canSubtract)
                            dispatch({
                              type: CartActionKind.Remove,
                              payload: { ...item, quantity: 1 },
                            });
                          else
                            dispatch({
                              type: CartActionKind.Remove,
                              payload: { ...item, quantity: 1 },
                            });
                        }}
                        role="button"
                        aria-hidden
                      >
                        {canSubtract ? (
                          <MinusSVG className="w-5 h-5" />
                        ) : (
                          <TrashSVG className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-lg w-6 text-center select-none">
                        {item.quantity}
                      </span>
                      <div
                        className={cls('p-1', {
                          'opacity-50': !canAddQuantity,
                          'transition-all hover:bg-gray-100 rounded': canAddQuantity,
                        })}
                        onClick={() =>
                          canAddQuantity &&
                          dispatch({
                            type: CartActionKind.Add,
                            payload: { ...item, quantity: 1 },
                          })
                        }
                        role="button"
                        aria-hidden
                      >
                        <PlusSVG className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-sm">
                      Sous-total:
                      <span className="pl-2">
                        {productPrice.price * item.quantity} €
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white py-5 px-8 flex flex-col justify-evenly h-3/5">
          <h3 className="text-xl font-bold mt-3 mb-1">Détails</h3>
          <div className="space-y-2">
            <p>
              Prix total des articles: <span>{total} €</span>
            </p>
            <p>
              VAT(20%): <span>{total * 0.2} €</span>
            </p>
            <p>
              Prix total:{' '}
              <span className="font-bold">{total + total * 0.2} €</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-3 mb-1">
              Méthode de livraison
            </h3>
            <div className="flex flex-col items-start space-y-1">
              <div className="inline-flex items-center">
                <input
                  type="radio"
                  name="livraison"
                  value="colissimo"
                  id="colissimo"
                  className="form-radio"
                  checked
                />
                <label className="ml-2 cursor-pointer transition-all hover:text-gray-500" htmlFor="colissimo">
                  Colissimo
                </label>
              </div>
              <div className="inline-flex items-center">
                <input
                  type="radio"
                  name="livraison"
                  value="mondial-relay"
                  id="mondial-relay"
                  className="form-radio"
                />
                <label className="ml-2 cursor-pointer transition-all hover:text-gray-500" htmlFor="mondial-relay">
                  Mondial relay
                </label>
              </div>
            </div>
          </div>
          <p className="text-xl font-bold">
            Total à payer{' '}
            <span className="ml-5 text-blue-400">{total + total * 0.2} €</span>
          </p>
          <Button className="w-full">Passer ma commande</Button>
        </div>
      </Container>
    </Layout>
  );
};

export default Cart;

function getTotalPrice(cart: C, prices: any) {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i];
    const productPrice = prices[item.product.id];
    total += item.quantity * productPrice.price;
  }
  return total;
}
