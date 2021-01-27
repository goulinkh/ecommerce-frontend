import cls from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type props = {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  href: string;
  regex?: RegExp;
};

const ActiveLink: React.FC<props> = ({
  children,
  activeClassName = '',
  inactiveClassName = '',
  className = '',
  href,
  regex = null,
  ...props
}) => {
  const { asPath } = useRouter();
  const isActive = !!asPath.match(regex || new RegExp(`^${href}$`));

  return (
    <Link href={href} {...props}>
      <span
        className={cls(
          'cursor-pointer',
          {
            [`${activeClassName}`]: isActive,
            [`${inactiveClassName}`]: !isActive,
          },
          className
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
