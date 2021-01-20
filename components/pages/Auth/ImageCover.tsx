import Image from "next/image";
import PagePatternSplitter2SVG from "../../../public/icons/page-pattern-splitter-2.svg";
import cls from "classnames";

const AuthImageCover = ({ invertX = false }: { invertX?: boolean }) => (
  <div className="relative hidden md:block md:w-1/2 2xl:w-2/3 h-full">
    <Image
      src="/images/signin-cover.png"
      objectFit="cover"
      layout="fill"
      className={invertX && "transform -scale-x-1"}
    />
    <PagePatternSplitter2SVG
      className={cls("h-full absolute top-0 text-gray-50", {
        "transform -scale-x-1 -right-7": invertX,
        "-left-7": !invertX,
      })}
    />
  </div>
);

export default AuthImageCover;
