import Logo from "../../Logo";
import cls from "classnames";

const AuthLogo = ({ position }: { position: "left" | "right" }) => (
  <Logo
    className={cls("hidden md:block absolute top-20 z-10", {
      "left-20": position === "left",
      "right-20": position === "right",
    })}
  />
);

export default AuthLogo;
