import { motion } from 'framer-motion';
import cls from 'classnames';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

type props = { toggle: any; isOpen: boolean; className?: string };

export const MenuToggle: React.FC<props> = ({
  toggle,
  isOpen,
  className = '',
}) => (
  <motion.button
    initial={isOpen}
    animate={isOpen ? 'open' : 'closed'}
    onClick={toggle}
    aria-label="Center Align"
    className={cls(className, ' ')}
  >
    <svg className="w-full h-full" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'currentColor' },
          open: { d: 'M 3 16.5 L 17 2.5', stroke: 'white' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'currentColor' },
          open: { d: 'M 3 2.5 L 17 16.346', stroke: 'white' },
        }}
      />
    </svg>
  </motion.button>
);
