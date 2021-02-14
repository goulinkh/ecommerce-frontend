import { Cart as C, CartContext } from 'context/cart';
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import CartLogo from 'public/icons/cart.svg';

type props = any;
const Cart: React.FC<props> = () => {
  const { cart } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(cart.items.length);
  const cartControls = useAnimation();
  const cartLengthRef = useRef(null);
  const ignoreFirstEvent = useRef(false);
  useEffect(() => {
    if (!ignoreFirstEvent.current) {
      ignoreFirstEvent.current = true;
      cartLengthRef.current.innerText = cartLength;
      return;
    }
    const sequence = async () => {
      await cartControls.start({
        scale: [1, 1.3, 1.3, 1.3, 1],
        rotateZ: [0, 8, -8, 8, -8, 8, 0],
        transition: { duration: 1 },
      });
      cartLengthRef.current.innerText = cartLength;
    };
    sequence();
  }, [cartLength, cartControls]);
  useEffect(() => setCartLength(cart.items.length), [cart]);

  return (
    <div className="flex flex-row items-center justify-center cursor-pointer p-2">
      <motion.div animate={cartControls} className="origin-center">
        <CartLogo className="text-black fill-current mr-4 h-6 origin-center" />
      </motion.div>
      <motion.span ref={cartLengthRef}></motion.span>
    </div>
  );
};

export default Cart;
