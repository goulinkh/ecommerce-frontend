import cls from 'classnames';
import Link from 'next/link';

const Logo: React.FC<any> = function ({ className = '', ...props }) {
  return (
    <span className={cls('text-2xl font-bold', className)} {...props}>
      <Link href="/">Beans.</Link>
    </span>
  );
};

export default Logo;
