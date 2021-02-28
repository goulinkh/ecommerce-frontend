import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Layout from 'components/Layout';
import makeAnimatedSeriesDiv from 'components/makeAnimatedSeriesDiv';
import AuthFormContainer from 'components/pages/Auth/FormContainer';
import AuthGreetingMessage from 'components/pages/Auth/GreetingMessage';
import AuthImageCover from 'components/pages/Auth/ImageCover';
import AuthLogo from 'components/pages/Auth/Logo';
import Select from 'components/Select';
import TextInput from 'components/TextInput';
import Link from 'next/link';
import EmailSVG from 'public/icons/email.svg';
import KeySVG from 'public/icons/key.svg';
import ShowPasswordSVG from 'public/icons/show-password.svg';

const SignUp: React.FC = function () {
  const AnimatedDiv = makeAnimatedSeriesDiv();
  return (
    <Layout navbar={false} footer={false} title="Créer un compte">
      <AuthLogo position="right" />
      <div className="w-screen h-screen md:flex md:flex-row items-center justify-center">
        {/* Form */}
        <AuthFormContainer>
          <AnimatedDiv>
            <AuthGreetingMessage />
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-2 flex-shrink-0">
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
            <div className="flex flex-col space-y-2 flex-1">
              <TextInput id="signup-first-name">Prénom</TextInput>
            </div>
            <div className="flex flex-col space-y-2 flex-1">
              <TextInput id="signup-last-name">Nom</TextInput>
            </div>
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col space-y-2">
            <TextInput
              type="email"
              placeholder="Votre mail ..."
              id="signup-email"
              prefix={
                (<EmailSVG className="w-6 bg-none mr-4 text-gray-600" />) as any
              }
            >
              Adresse e-mail
            </TextInput>
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col space-y-2">
            <TextInput
              type="password"
              placeholder="8+ caractères"
              id="signup-password"
              prefix={
                (<KeySVG className="w-6 bg-none mr-4 text-gray-600" />) as any
              }
              postfix={
                (
                  <ShowPasswordSVG className="w-6 bg-none ml-4 cursor-pointer" />
                ) as any
              }
            >
              Mot de passe
            </TextInput>
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col space-y-4 items-start justify-between">
            <Checkbox id="email-agreement">
              en cochant cette case, j&apos;accepte les conditions générales
            </Checkbox>
            <Checkbox id="email-receive-promotions">
              je souhaite recevoire des offres promotionnelles
            </Checkbox>
          </AnimatedDiv>
          <AnimatedDiv>
            <Button fill="linear" className="w-full">
              <span>Créer un compte</span>
            </Button>
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 pb-8 md:pb-0 items-center">
            <span>Vous avez déjà un compte?</span>
            <Link href="/auth/signin">
              <span className="cursor-pointer font-bold text-blue-400">
                Se connecter
              </span>
            </Link>
          </AnimatedDiv>
        </AuthFormContainer>
        <AuthImageCover />
      </div>
    </Layout>
  );
};

export default SignUp;
