import cls from "classnames";

export default function Container({ children, className = "", ...props }) {
  return (
    <div className={cls("px-12 lg:px-36 2xl:px-48 2xl:max-w-screen-2xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
