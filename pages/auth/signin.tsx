import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Layout from 'components/Layout';
import makeAnimatedSeriesDiv from 'components/makeAnimatedSeriesDiv';
import AuthFormContainer from 'components/pages/Auth/FormContainer';
import AuthGreetingMessage from 'components/pages/Auth/GreetingMessage';
import AuthImageCover from 'components/pages/Auth/ImageCover';
import AuthLogo from 'components/pages/Auth/Logo';
import TextInput from 'components/TextInput';
import Link from 'next/link';
import EmailSVG from 'public/icons/email.svg';
import KeySVG from 'public/icons/key.svg';
import ShowPasswordSVG from 'public/icons/show-password.svg';

const SignIn: React.FC = function () {
  const AnimatedDiv = makeAnimatedSeriesDiv();

  return (
    <Layout navbar={false} footer={false} title="Se connecter">
      <AuthLogo position="left" />
      <div className="w-screen h-screen md:flex md:flex-row items-center justify-center">
        <AuthImageCover invertX />
        <AuthFormContainer>
          <AnimatedDiv>
            <AuthGreetingMessage />
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col space-y-2">
            <TextInput
              id="signin-email"
              type="email"
              placeholder="Votre mail ..."
              prefix={
                (<EmailSVG className="w-6 bg-none mr-4 text-gray-600" />) as any
              }
            >
              Adresse e-mail
            </TextInput>
          </AnimatedDiv>
          <AnimatedDiv className="w-full flex flex-col space-y-2">
            <TextInput
              id="signin-password"
              type="password"
              placeholder="Votre mot de passe ..."
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
          <Checkbox id="signin-remember-me">Se souvenir de moi</Checkbox>
          <AnimatedDiv className="w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 items-center">
            <Button fill="linear" className="w-full md:flex-1">
              <span>Se connecter</span>
            </Button>
            <span className="hidden md:inline-block text-sm flex-shrink-0">
              ou
            </span>
            <Link href="/auth/signup">
              <span className="w-full md:flex-1">
                <Button fill="outline" className="w-full">
                  <span>Créer un compte</span>
                </Button>
              </span>
            </Link>
          </AnimatedDiv>
        </AuthFormContainer>
      </div>
    </Layout>
  );
};

export default SignIn;
