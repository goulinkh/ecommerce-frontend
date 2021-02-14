import cls from 'classnames';
import ActiveLink from 'components/ActiveLink';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { Cart as C } from 'context/cart';
import { NavbarIsStickyContext } from 'context/NavbarIsSticky';
import Link from 'next/link';
import UserLogo from 'public/icons/user.svg';
import { useContext } from 'react';
import { navItems } from '.';
import Cart from './Cart';

type props = { className?: string };
const LargeScreenNavbar: React.FC<props> = function ({ className = '' }) {
  const { sticky } = useContext(NavbarIsStickyContext);
  return (
    <Container
      className={cls(
        className,
        ' flex flex-row justify-between items-center py-3'
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <Logo className="mr-20" />
        <div className="flex flex-row items-center">
          {navItems.map((navItem, i) => (
            <ActiveLink
              key={i}
              href={navItem.href}
              regex={navItem.regex}
              className="px-4 py-1 rounded-lg transition-all transform hover:scale-105 focus:scale-105"
              activeClassName="bg-blue-400 text-white bg-opacity-75"
            >
              <span>{navItem.text}</span>
            </ActiveLink>
          ))}
        </div>
      </div>
      <div
        className={cls(
          'flex flex-row space-x-6 items-center rounded transition-all bg-gray-100 delay-300',
          {
            'bg-blur bg-opacity-50': !sticky,
            'bg-opacity-0': sticky,
          }
        )}
      >
        <Link href="/auth/signin">
          <div className="flex flex-row items-center justify-center cursor-pointer p-2">
            <UserLogo className="text-black fill-current mr-4 h-6" />
            <span className="">Se connecter</span>
          </div>
        </Link>
        <Link href="/cart">
          <span>
            <Cart />
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default LargeScreenNavbar;
