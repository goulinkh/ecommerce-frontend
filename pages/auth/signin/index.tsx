import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Logo from "../../../components/Logo";
import PagePatternSplitter2SVG from "../../../public/icons/page-pattern-splitter-2.svg";
import EmailSVG from "../../../public/icons/email.svg";
import KeySVG from "../../../public/icons/key.svg";
import ShowPasswordSVG from "../../../public/icons/show-password.svg";
import Button from "../../../components/Button";

export default function Signin() {
  return (
    <Layout navbar={false} footer={false}>
      <Logo className="absolute left-20 top-20 z-10" />
      <div className="w-screen h-screen flex flex-row">
        <div className="relative w-2/3 h-full">
          <Image
            src="/images/signin-cover.png"
            objectFit="cover"
            layout="fill"
            className="transform -scale-x-1"
          />
          <PagePatternSplitter2SVG className="h-full absolute -right-7 top-0 text-gray-50 transform -scale-x-1" />
        </div>
        <div className="w-1/3 h-full z-10 flex flex-col items-start justify-center space-y-12 px-10">
          <h1 className="text-xl  pb-10">
            Bienvenue à
            <Link href="/">
              <span className="cursor-pointer text-blue-400 font-bold pl-4">
                Beans.
              </span>
            </Link>
          </h1>
          <p className="text-base text-gray-700">
            Découvrir de nouvelles passions, repenser votre intérieur, consommer
            mieux pour vivre mieux
          </p>

          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="signin-email">Adresse e-mail</label>
            <div className="flex flex-row items-center  focus:ring focus:ring-blue-100 ring-0 rounded border border-gray-300 px-2 bg-white">
              <EmailSVG className="w-6 bg-none mr-4 text-gray-600" />
              <input
                type="email"
                id="signin-email"
                placeholder="Votre mail ..."
                className="form-input border-none w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="signin-password">Mot de passe</label>
            <div className="flex flex-row items-center  focus:ring focus:ring-blue-100 ring-0 rounded border border-gray-300 px-2 bg-white">
              <KeySVG className="w-6 bg-none mr-4 text-gray-600" />
              <input
                type="password"
                id="signin-password"
                placeholder="Votre mot de passe ..."
                className="form-input border-none w-full focus:outline-none"
              />
              <ShowPasswordSVG className="w-6 bg-none ml-4 cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex flex-row space-x-2 items-center">
            <input
              type="checkbox"
              id="email-remember-me"
              className="form-checkbox text-blue-400 h-6 w-6 rounded border-gray-300 border"
            />
            <label htmlFor="signin-remember-me">Se souvenir de moi</label>
          </div>
          <div className="w-full flex flex-row space-x-2 items-center">
            <Button fill="linear" className="flex-1">
              <span>Se connecter</span>
            </Button>
            <span className="text-sm flex-shrink-0">ou</span>
            <Link href="/auth/signup">
              <span className="flex-1">
                <Button fill="outline" className="w-full">
                  <span>Créer un compte</span>
                </Button>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
