import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type props = {
  onAnimationDone: any;
};

const AddToCartAnimation: React.FC<props> = ({ onAnimationDone }) => {
  const spinnerControls = useAnimation();
  const checkMarkPathControls = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      spinnerControls.set({ width: '2rem', opacity: 1 });
      checkMarkPathControls.set({
        clipPath: 'inset(0px 100% 0px 0px)',
        opacity: 1,
      });

      await spinnerControls.start({
        width: '0rem',
        opacity: 0,
        transition: { delay: 0.8, duration: 0.3, ease: 'easeOut' },
        transitionEnd: {
          opacity: 0,
        },
      });
      await checkMarkPathControls.start({
        clipPath: 'inset(0px 0% 0px 0px)',
        transition: { duration: 1 },
      });
      await checkMarkPathControls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onAnimationDone();
    };
    sequence();
  }, [checkMarkPathControls, onAnimationDone, spinnerControls]);
  return (
    <div className="relative w-8 overflow-visible">
      {/* Spinner */}
      <motion.svg
        className="h-auto absolute center-absolute"
        viewBox="-1 -1 39 39"
        fill="none"
        animate={spinnerControls}
      >
        <g stroke="currentColor" strokeWidth="2" className="text-gray-600">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              to="0 18 18"
              from="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </motion.svg>
      {/* Check mark */}
      <motion.svg
        className="w-8 text-green-500 absolute center-absolute"
        viewBox="0 0 16 16"
        fill="none"
      >
        <motion.path
          animate={checkMarkPathControls}
          fill="currentColor"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </motion.svg>
    </div>
  );
};

export default AddToCartAnimation;
