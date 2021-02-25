import { CartProvider } from 'context/cart';
import { NavbarIsStickyProvider } from 'context/NavbarIsSticky';
import { AnimateSharedLayout } from 'framer-motion';
import { AppType } from 'next/dist/next-server/lib/utils';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import 'styles/global.css';

const App: AppType = function ({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}
      language="french"
      scriptProps={{ appendTo: 'body' }}
    >
      <AnimateSharedLayout>
        <CartProvider>
          <NavbarIsStickyProvider>
            <Component {...pageProps} />
          </NavbarIsStickyProvider>
        </CartProvider>
      </AnimateSharedLayout>
    </GoogleReCaptchaProvider>
  );
};
export default App;
