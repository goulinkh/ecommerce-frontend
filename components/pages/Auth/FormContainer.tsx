import { motion } from "framer-motion";
import { ReactNode } from "react";

const AuthFormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      layoutId="auth-form"
      className="w-full md:w-1/2 2xl:w-1/3 z-10 flex flex-col items-start justify-center space-y-8 md:space-y-12 px-10"
    >
      {children}
    </motion.div>
  );
};

export default AuthFormContainer;
