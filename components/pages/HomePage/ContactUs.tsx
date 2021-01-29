import Button from 'components/Button';
import Container from 'components/Container';
import InViewAnimation from 'components/InViewAnimation';
import Image from 'components/Image';
import Link from 'next/link';

const ContactUs: React.FC = () => {
  return (
    <Container>
      <InViewAnimation className="flex flex-col md:flex-row w-full h-fit md:h-96 my-32">
        <div className="md:w-1/2 h-full flex flex-col justify-evenly items-center space-y-10 md:space-y-0">
          <h2 className="text-5xl font-bold">
            Vous avez un besoin spécifique ?
          </h2>
          <Link href="/contact">
            <span>
              <Button fill="primary">Contacter nous</Button>
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 h-64 md:h-full relative mt-12 md:mt-0">
          <Image
            src="/images/wood-hand-work.png"
            alt="Travail artisanal"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </InViewAnimation>
    </Container>
  );
};

export default ContactUs;
