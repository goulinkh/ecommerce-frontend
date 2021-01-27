import Layout from 'components/Layout';
import { Product } from 'utils/types';
import ContactUs from './ContactUs';
import FirstSection from './FirstSection';
import ProductsSlider from './ProductsSlider';

type props = {
  products: Product[];
  decorationProducts: Product[];
};

const HomePage: React.FC<props> = function ({ products, decorationProducts }) {
  return (
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
  );
};
export default HomePage;
