import cls from 'classnames';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import styles from './select.module.css';

type props = {
  variant?: 'gradient' | 'no-border' | 'none';
  bg?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select: React.FC<props> = function ({
  variant = 'gradient',
  bg = 'white',
  children,
  className = '',
  innerClassName = '',
  ...props
}) {
  return (
    <div
      className={cls('h-fit rounded', className, {
        [`bg-linear-1 ${styles.container}`]: variant === 'gradient',
        'border-none': variant === 'no-border',
      })}
    >
      <select
        defaultValue="test1"
        className={cls(
          innerClassName,
          `cursor-pointer form-select w-full pl-4 pr-10 py-2 rounded border-none bg-transparent bg-anchor-down bg-1 bg-clip-border focus:outline-none  bg-${bg}`,
          styles.select
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
