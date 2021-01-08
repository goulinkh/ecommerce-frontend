import cls from "classnames";
import { motion } from "framer-motion";

export default function MouseScroll({ className = "", ...props }) {
  return (
    <motion.svg
      width="28"
      height="47"
      viewBox="0 0 28 47"
      fill="none"
      className={cls(className)}
      {...props}
    >
      <motion.rect
        x="1.5"
        y="1.5"
        width="25"
        height="44"
        rx="12.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <motion.line
        x1="14.5"
        y1="10.5"
        x2="14.5"
        y2="20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          y1: [10.5, 17.5, 10.5],
          y2: [20.5, 22.5, 20.5],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />
    </motion.svg>
  );
}
