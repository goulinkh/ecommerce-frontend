import Logo from "../../Logo";
import cls from "classnames";

const AuthLogo = ({ position }: { position: "left" | "right" }) => (
  <Logo
    className={cls("hidden md:block absolute top-20 z-10", {
      "left-32": position === "left",
      "right-32": position === "right",
    })}
  />
);

export default AuthLogo;
