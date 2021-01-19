import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import PagePatternSplitter2SVG from "../../public/icons/page-pattern-splitter-2.svg";
import EmailSVG from "../../public/icons/email.svg";
import KeySVG from "../../public/icons/key.svg";
import ShowPasswordSVG from "../../public/icons/show-password.svg";
import Button from "../../components/Button";
import Select from "../../components/Select";

export default function Signup() {
  return (
    <Layout navbar={false} footer={false}>
      <Logo className="absolute right-20 top-20 z-10" />
      <div className="w-screen h-screen flex flex-row">
        {/* Form */}
        <div className="w-1/3 h-full z-10 flex flex-col items-start justify-center space-y-12 px-10">
          <h1 className="text-xl pb-10">
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
          <div className="w-full flex flex-row space-x-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="signup-civilite">Civilité</label>
              <Select
                id="signup-civilite"
                variant="none"
                className="w-full rounded border border-gray-300"
              >
                <option>Mme.</option>
                <option>M.</option>
                <option>Mr.</option>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="signup-first-name">Prénom</label>
              <input
                type="text"
                id="signup-first-name"
                className="w-full form-input rounded border border-gray-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="signup-last-name">Nom</label>
              <input
                type="text"
                id="signup-last-name"
                className="w-full form-input rounded border border-gray-300"
              />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="signup-email">Adresse e-mail</label>
            <div className="flex flex-row items-center  focus:ring focus:ring-blue-100 ring-0 rounded border border-gray-300 px-2 bg-white">
              <EmailSVG className="w-6 bg-none mr-4 text-gray-600" />
              <input
                type="email"
                id="signup-email"
                placeholder="Votre mail ..."
                className="form-input border-none w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="signup-password">Mot de passe</label>
            <div className="flex flex-row items-center  focus:ring focus:ring-blue-100 ring-0 rounded border border-gray-300 px-2 bg-white">
              <KeySVG className="w-6 bg-none mr-4 text-gray-600" />
              <input
                type="password"
                id="signup-password"
                placeholder="8+ caractères"
                className="form-input border-none w-full"
              />
              <ShowPasswordSVG className="w-6 bg-none ml-4 cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex flex-row space-x-2 items-center">
            <input
              type="checkbox"
              id="email-agreement"
              className="form-checkbox text-blue-400 h-6 w-6 rounded border-gray-300 border"
            />
            <label htmlFor="signup-agreement">
              en cochant cette case, j'accepte les conditions générales
            </label>
          </div>
          <div className="w-full flex flex-row space-x-2 items-center">
            <input
              type="checkbox"
              id="email-receive-promotions"
              className="form-checkbox text-blue-400 h-6 w-6 rounded border-gray-300 border"
            />
            <label htmlFor="signup-receive-promotions">
              je souhaite recevoire des offres promotionnelles
            </label>
          </div>
          <Button fill="linear" className="w-full">
            <span>Créer un compte</span>
          </Button>
          <div className="w-full flex flex-row space-x-4 items-center">
            <span>Vous avez déjà un compte?</span>
            <Link href="/auth/signin">
              <span className="cursor-pointer font-bold text-blue-400">
                Se connecter
              </span>
            </Link>
          </div>
        </div>
        <div className="relative w-2/3 h-full">
          <Image
            src="/images/signin-cover.png"
            objectFit="cover"
            layout="fill"
          />
          <PagePatternSplitter2SVG className="h-full absolute -left-7 top-0 text-gray-50" />
        </div>
      </div>
    </Layout>
  );
}
