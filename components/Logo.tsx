import cls from "classnames";
import Link from "next/link";

export default function Logo({ className = "", ...props }) {
  return (
    <span className={cls("text-2xl font-bold", className)} {...props}>
      <Link href="/">Beans.</Link>
    </span>
  );
}
