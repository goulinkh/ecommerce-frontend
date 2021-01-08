import cls from "classnames";
import Link from "next/link";
import { navItems } from ".";
import CartLogo from "../../public/icons/cart.svg";
import UserLogo from "../../public/icons/user.svg";
import ActiveLink from "../ActiveLink";
import Container from "../Container";
import Logo from "../Logo";

export default function LargeScreenNavbar({ className = "" }) {
  return (
    <Container
      className={cls(
        className,
        " flex flex-row justify-between items-center py-5"
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <Logo className="mr-20" />
        <div className="flex flex-row space-x-6 items-center">
          {navItems.map((navItem, i) => (
            <ActiveLink
              key={i}
              href={navItem.href}
              regex={navItem.regex}
              activeClassName="text-blue-400"
            >
              <span>{navItem.text}</span>
            </ActiveLink>
          ))}
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
  );
}
