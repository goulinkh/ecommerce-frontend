import cls from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type props = {
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container: React.FC<props> = function ({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={cls('mx-auto px-8 lg:px-36 2xl:max-w-screen-2xl', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
