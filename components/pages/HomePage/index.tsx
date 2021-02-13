import Layout from 'components/Layout';
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Product } from 'utils/types';
import ContactUs from './ContactUs';
import FirstSection from './FirstSection';
import ProductsSlider from './ProductsSlider';
import 'react-toastify/dist/ReactToastify.css';

type props = {
  products: Product[];
  decorationProducts: Product[];
};

const HomePage: React.FC<props> = function ({ products, decorationProducts }) {
  useEffect(() => {
    toast('Ce site est un démo, ce sont des faux produits 🙂', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'info',
    });
  }, []);
  return (
    <>
      <Layout navbarOverlap title="Page d'accueil">
        <FirstSection />
        <div className="relative">
          <ProductsSlider
            products={products}
            title="Populaire"
            href="/catalogue/0"
          />
          <div className="hidden md:block h-96 w-96 absolute -left-72 top-1/3 bg-linear-1 transform rotate-90 rounded-full"></div>
        </div>
        <ProductsSlider
          products={decorationProducts}
          title="Libérer l'esprit"
          href="/catalogue/0"
        />
        <ContactUs />
      </Layout>
      <ToastContainer
        position="top-right"
        bodyClassName="font-sans text-base"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default HomePage;
