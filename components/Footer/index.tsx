import Link from 'next/link';
import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';
import Twitter from 'public/icons/twitter.svg';
import Container from 'components/Container';
import Logo from 'components/Logo';

const Footer: React.FC = function () {
  return (
    <div className="bg-gray-800 text-gray-300 py-8">
      <Container className="flex flex-col justify-evenly space-y-10">
        <Logo />
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 text-sm">
          <div className="flex flex-col justify-between space-y-2 md:space-y-5">
            <Link href="/#">Vie privée</Link>

            <Link href="/#">FAQ</Link>

            <Link href="/#">Livraison & retour</Link>

            <Link href="/#">Condition d&apos;utilisation</Link>
          </div>
          <div className="flex flex-col justify-start space-y-2 md:space-y-5">
            <div className="font-bold">Adresse</div>
            <div className="leading-relaxed">
              53 Boulevard Jean Bruhnes <br />
              31300 Toulouse
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-2 md:space-y-5">
            <div className="font-bold">Coordonées</div>
            <div className="leading-relaxed">
              +33-765-5568-12 <br />
              contact@beans.fr
            </div>
          </div>
          <div className="flex flex-col justify-start space-y-2 md:space-y-5">
            <div className="font-bold">Suivez-nous sur les réseaux socieux</div>
            <div className="flex flex-row justify-start space-x-5">
              <Link href="/#">
                <span>
                  <Facebook className="w-6 h-w-6 cursor-pointer" />
                </span>
              </Link>
              <Link href="/#">
                <span>
                  <Instagram className="w-6 h-w-6 cursor-pointer" />
                </span>
              </Link>
              <Link href="/#">
                <span>
                  <Twitter className="w-6 h-w-6 cursor-pointer" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
