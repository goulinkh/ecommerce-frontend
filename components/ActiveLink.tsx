import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";
import cls from "classnames";

const ActiveLink = ({
  children,
  activeClassName = "",
  className = "",
  href,
  regex = null,
  ...props
}) => {
  const { asPath } = useRouter();
  const isActive = !!asPath.match(regex || new RegExp(`^${href}$`));

  return (
    <Link href={href} {...props}>
      <span
        className={cls("cursor-pointer", className, {
          [`${activeClassName}`]: isActive,
        })}
      >
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
