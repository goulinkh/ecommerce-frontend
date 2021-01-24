import { motion } from "framer-motion";

const makeAnimatedSeriesDiv = () => {
  let delayOrderIndex = 0;
  return ({ children, ...props }) => {
    const delayBetweenAnimations = 0.1;
    // ease out effect
    const delay =
      delayBetweenAnimations * delayOrderIndex + delayOrderIndex / 100;
    delayOrderIndex++;
    return (
      <motion.div
        {...props}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              opacity: { delay: delay + 0.1 },
              delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  };
};

export default makeAnimatedSeriesDiv;
