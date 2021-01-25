import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../utils/types";
import CartEmptySVG from "../../public/icons/cart-empty.svg";
import cls from "classnames";

export default function ProductCard({
  product,
  variant = "card",
  className,
}: {
  product: Product;
  variant?: "card" | "transparent";
  className?: string;
}) {
  const enStock = !!product.quantite;
  return (
    <motion.div>
      <Link href={`/products/${product.id}`}>
        <div
          className={cls(
            className,
            "relative  cursor-pointer  overflow-hidden ",
            {
              "w-52 rounded-lg bg-white shadow-md": variant === "card",
              "w-full bg-transparent": variant === "transparent",
            }
          )}
        >
          <div className="w-full flex flex-col items-start justify-center">
            <div className="relative w-full h-52  overflow-h rounded">
              <Image
                src={product.media[0]?.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="pl-4 pt-3 pb-1 font-bold">{product.nom}</p>
            {!onSale(product) ? (
              <p className="pl-4 pb-6">{product.prix} €</p>
            ) : (
              <div className="pl-4 pb-6 flex flex-row items-center space-x-2">
                <p className="text-blue-400">{getSalePrice(product)} €</p>
                <p className="text-sm text-gray-700 line-through">
                  {product.prix} €
                </p>
              </div>
            )}
          </div>
          {!enStock && (
            <div className="absolute h-full w-full rounded-lg top-0 left-0 flex justify-center items-center opacity-25 bg-black">
              <CartEmptySVG className="w-12 text-white" />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

function getSalePrice(product: Product) {
  if (!onSale(product)) {
    return product.prix;
  }
  if (product.promotion.new_price) return product.promotion.new_price;
  if (product.promotion.substract_price)
    return product.prix - product.promotion.substract_price;
  if (product.promotion.percantage_reduction) {
    const pricePercentage = 100 - product.promotion.percantage_reduction;
    return (product.prix * pricePercentage) / 100;
  }
}

function onSale(product: Product) {
  return !!product.promotion;
}
