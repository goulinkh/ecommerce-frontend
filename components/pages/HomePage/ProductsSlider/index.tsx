import cls from 'classnames';
import InViewAnimation from 'components/InViewAnimation';
import ProductCard from 'components/ProductCard';
import { motion, useElementScroll, useTransform } from 'framer-motion';
import AnchorLeftSVG from 'public/icons/anchor-left.svg';
import AnchorRightSVG from 'public/icons/anchor-right.svg';
import { useEffect, useRef, useState } from 'react';
import { Product } from 'utils/types';
import ProductSliderHeader from './Header';
import ProgressBar from './ProgressBar';

type props = {
  products: Product[];
  title: string;
  href: string;
  className?: string;
};
const ProductsSlider: React.FC<props> = function ({
  products,
  title,
  href,
  className,
}) {
  const productsListRef = useRef<any>();
  const { scrollXProgress } = useElementScroll(productsListRef);
  const xRange = useTransform(scrollXProgress, [0, 1], ['0%', '100%']);
  const [allProductsAreInView, setAllProductsAreInView] = useState(true);
  let productScrollIndex = 0;
  const updateScrollIndex = () => {
    const el = productsListRef.current;
    const productsDivs: HTMLElement[] = Array.from(el.children);
    if (productsDivs.length == 0) return;
    const elementsInViewport = productsDivs.filter((e) => elementInViewport(e));
    const lastElementIndex = productsDivs.findIndex(
      (e) => e === elementsInViewport[elementsInViewport.length - 1]
    );
    productScrollIndex = lastElementIndex !== -1 ? lastElementIndex : 0;
  };
  const scrollProductsList = (direction) => {
    const el = productsListRef.current;
    const productsDivs: HTMLElement[] = Array.from(el.children);
    if (productsDivs.length == 0) return;
    // Revenir au premiere element en cas d'arriver au dernier element
    if (elementInViewport(productsDivs[productsDivs.length - 1])) {
      productScrollIndex = 0;
    } else {
      productScrollIndex = productScrollIndex + direction;
    }
    productsDivs[productScrollIndex % productsDivs.length].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };
  // Vérifier si tous les produits sont affiché
  useEffect(() => {
    const el: HTMLElement = productsListRef.current;
    const checkToHideScrollControlButtons = () => {
      const productsDivs: HTMLElement[] = Array.from(el.children as any);
      setAllProductsAreInView(
        !productsDivs.length || productsDivs.every((e) => elementInViewport(e))
      );
    };
    checkToHideScrollControlButtons();
    window.addEventListener('resize', checkToHideScrollControlButtons);
    el.addEventListener('scroll', updateScrollIndex);
    return () => {
      window.removeEventListener('resize', checkToHideScrollControlButtons);
      el.removeEventListener('scroll', updateScrollIndex);
    };
  }, [setAllProductsAreInView]);

  return (
    <InViewAnimation
      className={cls(
        'pl-12 py-32 md:pl-36 lg:pl-48 flex flex-col items-start w-full space-y-10',
        className
      )}
    >
      <ProductSliderHeader title={title} href={href} />

      <motion.div
        className="py-2 flex flex-row items-center space-x-12 overflow-y-scroll hide-scrollbar w-full transition-all"
        ref={productsListRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </motion.div>
      {/* Afficher seulement si les produits dépasse la width (scroll) */}
      {!allProductsAreInView && (
        <div className="flex flex-col items-start justify-between space-y-4">
          <ProgressBar progressWidth={xRange} width={44} className="w-40" />
          <div className="flex flex-row items-center justify-start space-x-4 text-gray-500">
            <AnchorLeftSVG
              className="h-10 p-2 w-auto hover:text-gray-900 cursor-pointer"
              onClick={() => scrollProductsList(-1)}
            />
            <AnchorRightSVG
              className="h-10 p-2 w-auto hover:text-gray-900 cursor-pointer"
              onClick={() => scrollProductsList(1)}
            />
          </div>
        </div>
      )}
    </InViewAnimation>
  );
};

export default ProductsSlider;

function elementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}
