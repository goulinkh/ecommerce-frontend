import Button from 'components/Button';
import { motion, useAnimation } from 'framer-motion';
import CartAddSVG from 'public/icons/cart-add.svg';
import { useEffect, useState } from 'react';
import cls from 'classnames';
import content from 'public/icons/cart-add.svg';
type props = {
  onClick: any;
  disabled?: boolean;
  className?: string;
};

const AddToCartButton: React.FC<props> = ({ onClick, className, disabled }) => {
  const [add, setAdd] = useState(false);
  const contentControls = useAnimation();
  const SVGControls = useAnimation();
  const cartBgControls = useAnimation();
  const checkMarkControls = useAnimation();
  useEffect(() => {
    contentControls.set({ display: 'flex', y: 0 });
    SVGControls.set({ display: 'none', x: -1000 });
    if (add) {
      const sequence = async () => {
        await contentControls.start({ y: '-150%', opacity: 0 });
        contentControls.set({ display: 'none' });
        SVGControls.set({ display: 'inherit', rotateZ: '-30deg' });
        cartBgControls.set({ clipPath: 'inset(100% 0px 0px 0px)' });
        checkMarkControls.set({ clipPath: 'inset(0px 100% 0px 0px)' });
        await SVGControls.start({
          x: 0,
          rotateZ: ['-30deg', '-30deg', '-25deg', '-16deg', '0deg'],
          transition: { duration: 1.25 },
        });

        await cartBgControls.start({
          clipPath: 'inset(0% 0px 0px 0px)',
          transition: { duration: 0.4 },
        });
        await checkMarkControls.start({
          clipPath: 'inset(0px 0% 0px 0px)',
          transition: { duration: 0.6 },
        });
        await SVGControls.start({
          x: 1000,
          rotateZ: ['0deg', '-10deg', '-15deg', '-25deg', '-30deg'],
          transition: { duration: 1.25 },
        });
        contentControls.set({ display: 'flex', y: '-150%' });
        await contentControls.start({ opacity: 1, y: '0%', display: 'flex' });

        setAdd(false);
      };
      sequence();
    }
  }, [add, contentControls, SVGControls, cartBgControls, checkMarkControls]);
  return (
    <Button
      onClick={() => {
        setAdd(true);
        onClick();
      }}
      className={cls(className, 'overflow-hidden')}
      disabled={disabled}
    >
      <motion.div animate={contentControls} className="flex flex-row items-center space-x-2">
        <CartAddSVG className="w-6" />
        <span>Ajouter au panier</span>
      </motion.div> 
      <motion.svg
        className="w-8"
        viewBox="0 0 30 27"
        fill="none"
        animate={SVGControls}
      >
        {/* Background */}
        <motion.path
          animate={cartBgControls}
          d="M5.68587 8.06655C5.33007 6.21637 6.74781 4.5 8.63189 4.5H25.7288C27.6581 4.5 29.0858 6.29473 28.652 8.17458L27.0366 15.1746C26.7225 16.5358 25.5104 17.5 24.1135 17.5H9.97805C8.53964 17.5 7.30367 16.4791 7.03203 15.0665L5.68587 8.06655Z"
          fill="currentColor"
        />
        {/* Check mark */}
        <motion.path
          animate={checkMarkControls}
          d="M19.9706 7.97047C20.1115 7.83636 20.299 7.76222 20.4935 7.76369C20.688 7.76516 20.8743 7.84214 21.0131 7.97836C21.1519 8.11459 21.2324 8.29942 21.2375 8.49385C21.2427 8.68828 21.1721 8.8771 21.0406 9.02047L17.0506 14.0105C16.982 14.0844 16.8992 14.1437 16.8072 14.1848C16.7151 14.226 16.6157 14.2482 16.5149 14.2501C16.4141 14.2519 16.3139 14.2334 16.2204 14.1957C16.1269 14.158 16.0419 14.1018 15.9706 14.0305L13.3246 11.3845C13.251 11.3158 13.1919 11.233 13.1509 11.141C13.1099 11.049 13.0878 10.9497 13.0861 10.849C13.0843 10.7483 13.1028 10.6483 13.1405 10.5549C13.1782 10.4615 13.2344 10.3767 13.3056 10.3054C13.3768 10.2342 13.4617 10.1781 13.555 10.1404C13.6484 10.1026 13.7485 10.0841 13.8492 10.0859C13.9499 10.0877 14.0492 10.1097 14.1412 10.1507C14.2332 10.1917 14.316 10.2508 14.3846 10.3245L16.4786 12.4175L19.9516 7.99248C19.9579 7.98478 19.9636 7.97743 19.9706 7.97047Z"
          className="text-blue-400"
          fill="currentColor"
        />
        {/* Cart */}
        <motion.path
          d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4C4.22306 6.1623e-05 4.4397 0.0747014 4.61546 0.212049C4.79122 0.349398 4.91602 0.541568 4.97 0.758L5.78 4H29C29.1519 4.00004 29.3018 4.03469 29.4383 4.10131C29.5748 4.16792 29.6943 4.26477 29.7878 4.38448C29.8813 4.50419 29.9463 4.64363 29.9779 4.79222C30.0095 4.9408 30.0068 5.09462 29.97 5.242L26.97 17.242C26.916 17.4584 26.7912 17.6506 26.6155 17.788C26.4397 17.9253 26.2231 17.9999 26 18H8C7.77694 17.9999 7.5603 17.9253 7.38454 17.788C7.20878 17.6506 7.08398 17.4584 7.03 17.242L3.22 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM6.28 6L8.78 16H25.22L27.72 6H6.28ZM10 21C9.46957 21 8.96086 21.2107 8.58579 21.5858C8.21071 21.9609 8 22.4696 8 23C8 23.5304 8.21071 24.0391 8.58579 24.4142C8.96086 24.7893 9.46957 25 10 25C10.5304 25 11.0391 24.7893 11.4142 24.4142C11.7893 24.0391 12 23.5304 12 23C12 22.4696 11.7893 21.9609 11.4142 21.5858C11.0391 21.2107 10.5304 21 10 21ZM6 23C6 21.9391 6.42143 20.9217 7.17157 20.1716C7.92172 19.4214 8.93913 19 10 19C11.0609 19 12.0783 19.4214 12.8284 20.1716C13.5786 20.9217 14 21.9391 14 23C14 24.0609 13.5786 25.0783 12.8284 25.8284C12.0783 26.5786 11.0609 27 10 27C8.93913 27 7.92172 26.5786 7.17157 25.8284C6.42143 25.0783 6 24.0609 6 23ZM24 21C23.4696 21 22.9609 21.2107 22.5858 21.5858C22.2107 21.9609 22 22.4696 22 23C22 23.5304 22.2107 24.0391 22.5858 24.4142C22.9609 24.7893 23.4696 25 24 25C24.5304 25 25.0391 24.7893 25.4142 24.4142C25.7893 24.0391 26 23.5304 26 23C26 22.4696 25.7893 21.9609 25.4142 21.5858C25.0391 21.2107 24.5304 21 24 21ZM20 23C20 21.9391 20.4214 20.9217 21.1716 20.1716C21.9217 19.4214 22.9391 19 24 19C25.0609 19 26.0783 19.4214 26.8284 20.1716C27.5786 20.9217 28 21.9391 28 23C28 24.0609 27.5786 25.0783 26.8284 25.8284C26.0783 26.5786 25.0609 27 24 27C22.9391 27 21.9217 26.5786 21.1716 25.8284C20.4214 25.0783 20 24.0609 20 23Z"
          fill="currentColor"
        />
      </motion.svg>
    </Button>
  );
};

export default AddToCartButton;
