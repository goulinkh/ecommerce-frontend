import cls from 'classnames';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

type props = {
  children: React.ReactNode;
  tooltipContent: any;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Tooltip: React.FC<props> = ({
  children,
  tooltipContent,
  className,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={cls(className, 'relative')}
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-describedby="tooltip"
    >
      {children}
      <motion.div
        className={cls(
          'absolute transform mt-1 -translate-x-1/2 left-1/2 flex flex-col items-center justify-center space-y-0 opacity-0 z-30'
        )}
        animate={hover ? 'show' : 'hide'}
        variants={{ hide: { opacity: 0 }, show: { opacity: 1 } }}
      >
        <svg
          className="text-gray-600 w-7"
          viewBox="0 0 16 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.07361 6.5321C1.13757 6.9064 0.643555 6.99997 0.513672 7H15.4902C15.3602 6.99997 14.866 6.9064 13.9296 6.5321C12.9933 6.15784 12.526 5.61423 12.4069 5.44766L8.66443 0.320007C8.62561 0.266693 8.58191 0.218994 8.53442 0.177734C8.49231 0.141174 8.44714 0.10968 8.39954 0.0837402C8.29822 0.0285645 8.18823 0 8.07678 0C8.05115 0 8.02563 0.00152588 8.00024 0.0045166C7.98645 0.00289917 7.97266 0.00170898 7.95886 0.000976562C7.94714 0.000335693 7.93542 0 7.92371 0C7.81238 0 7.70239 0.0285645 7.60107 0.0837402C7.58484 0.0925598 7.56897 0.10202 7.55347 0.112091C7.52319 0.131683 7.49414 0.153595 7.46631 0.177734C7.41882 0.218994 7.37524 0.266693 7.3363 0.320007L3.59558 5.44766C3.47656 5.61423 3.00952 6.15784 2.07361 6.5321Z"
            fill="currentColor"
          />
        </svg>
        <div
          className="text-sm mt-5 py-1 px-2 bg-gray-600 text-gray-100 rounded  shadow w-max"
          role="tooltip"
        >
          {tooltipContent}
        </div>
      </motion.div>
    </div>
  );
};

export default Tooltip;
