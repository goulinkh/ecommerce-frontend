import cls from 'classnames';
import Link from 'next/link';
import RightArrowSVG from 'public/icons/right-arrow.svg';
import { useState } from 'react';

type props = {
  title: string;
  href: string;
};

const ProductSliderHeader: React.FC<props> = function ({ title, href }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full pr-12 md:pr-36 lg:pr-48 flex flex-row justify-between items-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <Link href={href}>
        <span
          className="flex flex-row items-center space-x-3 cursor-pointer text-base px-2 py-5"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>Voir tout</span>
          <RightArrowSVG
            className={cls('h-3 w-auto transition-all transform', {
              'translate-x-2': hover,
            })}
          />
        </span>
      </Link>
    </div>
  );
};

export default ProductSliderHeader;
