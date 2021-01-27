import cls from 'classnames';
import Image from 'next/image';
import MinusSVG from 'public/icons/minus.svg';
import PlusSVG from 'public/icons/plus.svg';
import { ReactNode, useState } from 'react';
import { Media } from 'utils/types';

type props = { medias: Media[] };

// TODO: make ProductVideo
const ProductImages: React.FC<props> = function ({ medias }) {
  const [previousMainMediaIndex, setPreviousMainMediaIndex] = useState(0);
  const [currentMainMediaIndex, setCurrentMainMediaIndex] = useState(0);
  const updateMainMediaIndex = (newIndex) => {
    setPreviousMainMediaIndex(currentMainMediaIndex);
    setCurrentMainMediaIndex(newIndex);
  };
  const onMediaClick = (index) => {
    updateMainMediaIndex(index);
    setPreviousMainMediaIndex(index);
  };
  return (
    <div className="flex flex-col w-72 md:w-full h-96 md:h-37rem items-center m-auto">
      <ProductImage image={medias[currentMainMediaIndex]} size="big">
        {/* TODO: make logic part of zoom */}
        {/* <ZoomControls /> */}
      </ProductImage>
      <div className="h-32 w-fit max-w-full pt-6 pb-2 space-x-4 overflow-x-auto overflow-y-hidden grid grid-rows-1 grid-flow-col">
        {medias.map((image, i) => (
          <ProductImage
            key={i}
            size="small"
            active={i === currentMainMediaIndex}
            image={image}
            onClick={() => onMediaClick(i)}
            onHover={{
              on: () => updateMainMediaIndex(i),
              off: () => updateMainMediaIndex(previousMainMediaIndex),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

const ProductImage = ({
  image,
  className,
  onClick,
  size,
  children,
  onHover,
  active = false,
}: {
  image: Media;
  className?: string;
  size: 'small' | 'big';
  onClick?: any;
  onHover?: { on: any; off: any };
  children?: ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={cls(
        className,
        'relative overflow-hidden transition-all rounded',
        {
          'h-full w-20 cursor-pointer': size === 'small',
        },
        { 'w-full h-full': size === 'big' },
        { 'border border-gray-600': active }
      )}
      onClick={() => onClick && onClick()}
      onMouseEnter={() => onHover?.on()}
      onMouseLeave={() => onHover?.off()}
      role="button"
      aria-hidden
    >
      <Image objectFit="contain" layout="fill" src={image.url} />
      {children}
    </div>
  );
};

// eslint-disable-next-line
const ZoomControls: React.FC = () => (
  <div className="absolute bottom-6 right-6 flex flex-row space-x-2">
    <MinusSVG className="w-8 h-8 text-gray-500" />
    <PlusSVG className="w-8 h-8 text-black cursor-pointer" />
  </div>
);
