import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";

export const navItems = [
  { text: "Accueil", href: "/" },
  { text: "Catalogue", href: "/catalogue/all", regex: /^\/catalogue\/.*/ },
  { text: "Nouveautés", href: "/nouveaute" },
  { text: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-blur bg-opacity-10 bg-white text-base z-20">
      <MobileNavbar className="lg:hidden" />
      <LargeScreenNavbar className="hidden lg:flex" />
    </nav>
  );
}
