import cls from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
export default function TextInput({
  type = "text",
  id,
  prefix,
  postfix,
  children,
  className,
  ...props
}: {
  type?: "text" | "email" | "password";
  id?: string;
  prefix?: any;
  postfix?: any;
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <div
        className={cls(
          className,
          "form-input flex flex-row items-center rounded border border-gray-300 bg-white"
        )}
      >
        {prefix}
        <input
          type={type}
          name={id}
          id={id}
          className="border-none w-full focus:outline-none"
          {...props}
        />
        {postfix}
      </div>
    </>
  );
}
