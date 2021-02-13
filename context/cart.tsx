import { createContext, useReducer } from 'react';
import { Product } from 'utils/types';

// TODO: make enum for actions
const initCartValue = { items: [] };
function getSavedCartState(): Cart {
  if (process.browser) {
    return JSON.parse(localStorage.getItem('STORE.CART')) || initCartValue;
  }
  return initCartValue;
}
function persisteCart(value: Cart) {
  localStorage.setItem('STORE.CART', JSON.stringify(value));
  return value;
}
type CartItem = { product: Product; quantity: number };
export type Cart = {
  items: CartItem[];
};

export enum CartActionKind {
  // eslint-disable-next-line no-unused-vars
  Add = 'ADD_PRODUCT',
  // eslint-disable-next-line no-unused-vars
  Remove = 'REMOVE_PRODUCT',
}

type Action = {
  type: CartActionKind;
  payload: CartItem;
};

function cartReducer(state: Cart, action: Action): Cart {
  const itemToUpdate = state.items.find(
    (i) => i.product.id === action.payload.product.id
  );
  switch (action.type) {
    case CartActionKind.Add:
      if (itemToUpdate) {
        itemToUpdate.quantity += action.payload.quantity;
        return persisteCart({ items: [...state.items] });
      } else {
        return persisteCart({ items: [...state.items, action.payload] });
      }
    case CartActionKind.Remove:
      itemToUpdate.quantity -= action.payload.quantity;
      if (itemToUpdate.quantity <= 0)
        return persisteCart({
          items: [...state.items.filter((i) => i !== itemToUpdate)],
        });
      else {
        return persisteCart({ items: [...state.items] });
      }
    default:
      throw new Error('Unknown Cart Action');
  }
}

export const CartContext = createContext<{
  cart: Cart;
  dispatch: React.Dispatch<Action>;
}>(null);

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, null, getSavedCartState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
