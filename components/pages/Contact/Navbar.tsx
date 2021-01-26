import cls from "classnames";
import Container from "../../Container";
import Logo from "../../Logo";

export default function ContactNavbar() {
  return (
    <nav
      className={cls(
        "fixed top-0 left-0 w-screen bg-blur bg-white text-base z-20 bg-opacity-50"
      )}
    >
      <Container className="h-12 flex items-center">
        <Logo />
      </Container>
    </nav>
  );
}
