import cls from "classnames";
import { motion } from "framer-motion";

export default function Button({
  fill = "linear",
  className,
  children,
}: {
  fill?: "linear" | "outline" | "primary";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      className={cls(
        className,
        "inline-flex flex-row items-center justify-center space-x-1 px-6 py-2 rounded-md fill-current focus:outline-none focus:ring-2 ring-blue-300 font-bold text-lg whitespace-nowrap",
        {
          "bg-linear-1 text-white ring-blue-300 border-blue-400":
            fill === "linear",
          "bg-white text-blue-400 ring-gray-300": fill === "outline",
          "bg-blue-400 text-white ring-blue-300": fill === "primary",
        }
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </motion.button>
  );
}
