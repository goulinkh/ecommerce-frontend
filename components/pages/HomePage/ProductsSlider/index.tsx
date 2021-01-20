import cls from "classnames";
import { motion, useElementScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnchorLeftSVG from "../../../../public/icons/anchor-left.svg";
import AnchorRightSVG from "../../../../public/icons/anchor-right.svg";
import { Product } from "../../../../utils/types";
import ProductCard from "../../../ProductCard";
import ProductSliderHeader from "./Header";
import ProgressBar from "./ProgressBar";

export default function ProductsSlider({
  products,
  title,
  href,
  className,
}: {
  products: Product[];
  title: string;
  href: string;
  className?: string;
}) {
  const productsListRef = useRef<any>();
  const { scrollXProgress } = useElementScroll(productsListRef);
  const xRange = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
  const scrollProductsList = (direction) => {
    const el = productsListRef.current;
    if (el != undefined) {
      el.scrollLeft = el.scrollLeft + 200 * direction;
    }
  };
  return (
    <div
      className={cls(
        "pl-12 py-32 md:pl-36 lg:pl-48 flex flex-col items-start w-full space-y-10",
        className
      )}
    >
      <ProductSliderHeader title={title} href={href} />

      <motion.div
        className="py-2 flex flex-row items-center space-x-12 overflow-y-scroll hide-scrollbar w-full transition-all"
        ref={productsListRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </motion.div>
      <div className="flex flex-col items-start justify-between space-y-4">
        <ProgressBar progressWidth={xRange} width={44} className="w-40" />
        <div className="flex flex-row items-center justify-start space-x-6 text-gray-500">
          <AnchorLeftSVG
            className="h-6 w-auto hover:text-gray-900 cursor-pointer"
            onClick={() => scrollProductsList(-1)}
          />
          <AnchorRightSVG
            className="h-6 w-auto hover:text-gray-900 cursor-pointer"
            onClick={() => scrollProductsList(1)}
          />
        </div>
      </div>
    </div>
  );
}
