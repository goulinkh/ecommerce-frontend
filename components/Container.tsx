import cls from "classnames";

export default function Container({ children, className = "", ...props }) {
  return (
    <div className={cls("mx-12 lg:mx-36 2xl:mx-60 2xl:max-w-screen-2xl ", className)} {...props}>
      {children}
    </div>
  );
}
