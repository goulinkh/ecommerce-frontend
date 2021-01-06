import cls from "classnames";

export default function Container({ children, className = "", ...props }) {
  return (
    <div className={cls("px-12 md:px-36 lg:px-48", className)} {...props}>
      {children}
    </div>
  );
}
