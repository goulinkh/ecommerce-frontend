import Link from "next/link";

const AuthGreetingMessage = () => (
  <div className="flex flex-col justify-center space-y-12 pt-8 md:pt-0">
    <h1 className="text-xl">
      Bienvenue à
      <Link href="/">
        <span className="cursor-pointer text-blue-400 font-bold pl-4">
          Beans.
        </span>
      </Link>
    </h1>
    <p className="text-base text-gray-700">
      Découvrir de nouvelles passions, repenser votre intérieur, consommer mieux
      pour vivre mieux
    </p>
  </div>
);

export default AuthGreetingMessage;
