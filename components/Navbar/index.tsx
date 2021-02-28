import cls from 'classnames';
import { CartContext } from 'context/cart';
import { NavbarIsStickyContext } from 'context/NavbarIsSticky';
import { useContext, useEffect } from 'react';
import LargeScreenNavbar from './LargeScreenNavbar';
import MobileNavbar from './MobileNavbar';

export const navItems = [
  // { text: 'Accueil', href: '/' },
  { text: 'Catalogue', href: '/catalogue/0', regex: /^\/catalogue\/.*/ },
  { text: 'Nouveautés', href: '/nouveaute' },
  { text: 'Contact', href: '/contact' },
];

type props = {
  sticky?: boolean;
};

const Navbar: React.FC<props> = function ({ sticky: checkIfSticky = true }) {
  const { sticky, setSticky } = useContext(NavbarIsStickyContext);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    if (!checkIfSticky) return;
    const listener = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [setSticky]);

  return (
    <nav
      className={cls(
        'fixed top-0 left-0 w-screen bg-white text-base z-20 transition-all delay-300',
        {
          'bg-opacity-50 bg-blur': sticky || !checkIfSticky,
          'bg-opacity-0': !sticky,
        }
      )}
    >
      <MobileNavbar className="lg:hidden" />
      <LargeScreenNavbar className="hidden lg:flex" />
    </nav>
  );
};

export default Navbar;
