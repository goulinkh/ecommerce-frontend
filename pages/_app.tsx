import { CartProvider } from 'context/cart';
import { NavbarIsStickyProvider } from 'context/NavbarIsSticky';
import { AnimateSharedLayout } from 'framer-motion';
import { AppType } from 'next/dist/next-server/lib/utils';
import 'styles/global.css';

const App: AppType = function ({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <CartProvider>
        <NavbarIsStickyProvider>
          <Component {...pageProps} />
        </NavbarIsStickyProvider>
      </CartProvider>
    </AnimateSharedLayout>
  );
};
export default App;
