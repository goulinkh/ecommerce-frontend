import cls from "classnames";
export default function ProgressBar({
  percentage,
  width = 32,
  className = "",
}: {
  percentage: number;
  width: number;
  className: string;
}) {
  return (
    <div className={cls(className, `h-0.5 w-${width} relative rounded-full`)}>
      <div className="h-full w-full bg-gray-400 rounded-full"></div>
      <div
        className="absolute left-0 top-0  -translate-y-1 h-1 bg-linear-1 rounded-full"
        style={{
          width: `${percentage}%`,
          transform: "translateY(-30%)",
          boxShadow: "0 0 4px rgba(73,169,230,.8)",
        }}
      ></div>
    </div>
  );
}
