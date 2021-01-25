import cls from "classnames";

export default function Container({ children, className = "", ...props }) {
  return (
    <div
      className={cls(
        "mx-auto px-8 lg:px-36 2xl:max-w-screen-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
