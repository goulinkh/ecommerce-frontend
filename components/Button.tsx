import cls from 'classnames';
import { motion } from 'framer-motion';

type props = {
  fill?: 'linear' | 'outline' | 'primary';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<props> = function ({
  fill = 'linear',
  className,
  disabled = false,
  children,
  onClick,
  type,
}) {
  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={cls(
        className,
        'select-none inline-flex flex-row items-center justify-center space-x-1 px-6 py-2 rounded-md fill-current font-bold text-lg whitespace-nowrap',
        {
          'bg-linear-1 text-white ring-blue-300 border-blue-400':
            fill === 'linear',
          'bg-white text-blue-400 ring-gray-300 border border-blue-400':
            fill === 'outline',
          'bg-blue-400 text-white ring-blue-300': fill === 'primary',
          'cursor-default': disabled,
        }
      )}
      style={{ filter: disabled ? 'grayscale(0.8)' : '' }}
      whileHover={{ scale: !disabled ? 1.05 : 1 }}
      whileTap={{ scale: 1 }}
      aria-label="Center Align"
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
