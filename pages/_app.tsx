import { CartProvider } from 'context/cart';
import { AnimateSharedLayout } from 'framer-motion';
import { AppType } from 'next/dist/next-server/lib/utils';
import 'styles/global.css';

const App: AppType = function ({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AnimateSharedLayout>
  );
};
export default App;
