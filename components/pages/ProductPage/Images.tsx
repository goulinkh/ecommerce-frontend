import Image from "next/image";
import { Media } from "../../../utils/types";
import cls from 'classnames'

const ProductImage = ({
  src,
  size,
}: {
  src: string;
  size: "big" | "small";
}) => (
  <Image width="auto" height="400" className="bg-red-300" src={src} objectFit="contain" layout="intrinsic" />
);
// TODO: make ProductVideo
export default function ProductImages({
  firstImage,
  images,
}: {
  firstImage: Media;
  images: Media[];
}) {
  return (
    <section className="">
      <ProductImage src={firstImage.url} size="big" />
    </section>
  );
}
