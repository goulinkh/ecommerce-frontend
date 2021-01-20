import { Product } from "../../../utils/types";
import Layout from "../../Layout";
import FirstSection from "./FirstSection";
import ProductsSlider from "./ProductsSlider";

export default function HomePage({ products }: { products: Product[] }) {
  return (
    <Layout navbarOverlap title="Page d'accueil">
      <FirstSection />
      <div className="relative">
        <ProductsSlider
          products={products}
          title="Populaire"
          href="/catalogue/all"
        />
        <div className="hidden md:block h-96 w-96 absolute -left-72 top-1/3 bg-linear-1 transform rotate-90 rounded-full"></div>
      </div>
      <ProductsSlider
        products={products}
        title="Libérer l'esprit"
        href="/catalogue/all"
      />
    </Layout>
  );
}
