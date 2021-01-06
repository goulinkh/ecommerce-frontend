import Link from "next/link";
import CartLogo from "../../public/icons/cart.svg";
import UserLogo from "../../public/icons/user.svg";
import ActiveLink from "../ActiveLink";
import Container from "../Container";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blur text-base z-10">
      <Container className=" flex flex-row justify-between items-center py-5  ">
        <div className="flex flex-row justify-between items-center">
          <Logo className="mr-20" />
          <div className="flex flex-row space-x-6 items-center">
            <ActiveLink href="/" activeClassName="text-blue-400">
              <span>Accueil</span>
            </ActiveLink>
            <ActiveLink
              href="/catalogue/all"
              activeClassName="text-blue-400"
              regex={/^\/catalogue\/.*/}
            >
              <span>Catalogue</span>
            </ActiveLink>
            <ActiveLink href="/nouveaute" activeClassName="text-blue-400">
              <span>Nouveautés</span>
            </ActiveLink>
            <ActiveLink href="/contact" activeClassName="text-blue-400">
              <span>Contact</span>
            </ActiveLink>
          </div>
        </div>
        <div className="flex flex-row space-x-6 items-center">
          <Link href="/auth/signin">
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <UserLogo className="text-black fill-current mr-4 h-6 w-6" />
              <span className="">Se connecter</span>
            </div>
          </Link>
          <Link href="/cart">
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <CartLogo className="text-black fill-current mr-4 h-6 w-6" />
              <span>0</span>
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
