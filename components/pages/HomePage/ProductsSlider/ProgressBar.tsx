import cls from "classnames";
import { motion, MotionValue } from "framer-motion";
export default function ProgressBar({
  percentage,
  progressWidth,
  className = "",
}: {
  percentage?: number;
  progressWidth?: MotionValue<any>;
  width: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cls(className, `h-0.5 relative rounded-full`)}
    >
      <motion.div className="h-full w-full bg-gray-400 rounded-full"></motion.div>
      <motion.div
        className="absolute left-0 top-0  -translate-y-1 h-1 bg-linear-1 rounded-full"
        style={{
          width: progressWidth || `${percentage}%`,
          transform: "translateY(-30%)",
          boxShadow: "0 0 4px rgba(73,169,230,.8)",
        }}
      ></motion.div>
    </motion.div>
  );
}
