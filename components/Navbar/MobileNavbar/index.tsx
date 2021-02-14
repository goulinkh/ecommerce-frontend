import cls from 'classnames';
import ActiveLink from 'components/ActiveLink';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { motion, useCycle, Variants } from 'framer-motion';
import Link from 'next/link';
import CartLogo from 'public/icons/cart.svg';
import UserLogo from 'public/icons/user.svg';
import { navItems } from '..';
import Cart from '../Cart';
import { MenuToggle } from './MenuToggle';

type props = { className?: string };

const MobileNavbar: React.FC<props> = function ({ className = '' }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <Container
      className={cls(
        className,
        ' flex flex-row justify-between items-center py-5 '
      )}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <Logo />
        <div className="flex flex-row space-x-3 justify-between items-center">
          <Link href="/auth/signin">
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <UserLogo className="text-black fill-current mr-2 h-5 w-5" />
              {/* <span className="">Se connecter</span> */}
            </div>
          </Link>
          <Link href="/cart">
            <span>
              <Cart />
            </span>
          </Link>
          <motion.div
            className="fixed right-0 top-0 h-screen bg-linear-1 bg-opacity-90   w-10/12 rounded-tl-xl rounded-bl-xl "
            variants={sidebar}
            animate={isOpen ? 'open' : 'closed'}
          >
            <div className="w-full h-full mt-10 flex flex-col justify-start items-center">
              {navItems.map((navItem, i) => (
                <ActiveLink
                  key={i}
                  href={navItem.href}
                  regex={navItem.regex}
                  className="w-full  p-4 text-center border-b last:border-b-0 border-solid border-gray-900"
                  inactiveClassName="text-gray-900"
                  activeClassName="text-white"
                >
                  <motion.span className="" variants={sidebarItem}>
                    {navItem.text}
                  </motion.span>
                </ActiveLink>
              ))}
            </div>
          </motion.div>

          <MenuToggle
            className="z-40 h-5 w-5"
            toggle={() => toggleOpen()}
            isOpen={isOpen}
          />
        </div>
      </div>
    </Container>
  );
};

export default MobileNavbar;

const sidebar = {
  open: {
    clipPath: `circle(100vh at 100% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0vh at 100% 0%)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const sidebarItem: Variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
  },
};
