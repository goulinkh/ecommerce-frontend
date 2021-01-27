import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type props = {
  children: React.ReactNode;
  className?: string;
};

const InViewAnimation: React.FC<props> = function ({ children, className }) {
  // https://stackoverflow.com/questions/58958972/framer-motion-animate-when-element-is-in-view-when-you-scroll-to-element
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0, transition: { delay: 0.5 } },
      }}
      className={className}
    >
      <div></div>
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
