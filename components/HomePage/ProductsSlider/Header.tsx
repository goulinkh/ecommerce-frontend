import Link from "next/link";
import RightArrowSVG from "../../../public/icons/right-arrow.svg";
export default function ProductSliderHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="w-full pr-12 md:pr-36 lg:pr-48 flex flex-row justify-between items-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <Link href={href}>
        <span className="flex flex-row items-center space-x-3 cursor-pointer text-base">
          <span>Voir tout</span>
          <RightArrowSVG className="h-3 w-auto"/>
        </span>
      </Link>
    </div>
  );
}
