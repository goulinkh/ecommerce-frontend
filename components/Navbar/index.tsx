import cls from 'classnames';
import { useEffect, useState } from 'react';
import LargeScreenNavbar from './LargeScreenNavbar';
import MobileNavbar from './MobileNavbar';

export const navItems = [
  { text: 'Accueil', href: '/' },
  { text: 'Catalogue', href: '/catalogue/0', regex: /^\/catalogue\/.*/ },
  { text: 'Nouveautés', href: '/nouveaute' },
  { text: 'Contact', href: '/contact' },
];

const Navbar: React.FC = function () {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const listener = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <nav
      className={cls(
        'fixed top-0 left-0 w-screen bg-blur bg-white text-base z-20 transition-all delay-300',
        {
          'bg-opacity-50': sticky,
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
