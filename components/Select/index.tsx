import cls from "classnames";
import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import styles from "./select.module.css";
export default function Select({
  variant = "gradient",
  bg = "white",
  children,
  className = "",
  ...props
}: {
  variant?: "gradient" | "no-border" | "none";
  bg?: string;
  className?: string;
  children: React.ReactNode;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) {
  return (
    <div
      className={cls("h-fit rounded", className, {
        [`bg-linear-1 ${styles.container}`]: variant === "gradient",
        "border-none": variant === "no-border",
      })}
    >
      <select
        defaultValue="test1"
        className={cls(
          `w-full pl-4 pr-10 py-2 rounded border-none bg-transparent bg-anchor-down bg-1 bg-clip-border focus:outline-none focus:ring-2 ring-blue-100 bg-${bg}`,
          styles.select
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
