import MouseScroll from 'components/animated-icons/MouseScroll';
import Button from 'components/Button';
import Container from 'components/Container';
import { motion } from 'framer-motion';
import Image from 'components/Image';
import HomeSphere from 'public/icons/home-sphere.svg';
import Link from 'next/link';

const Lamps: React.FC = () => (
  <div className="absolute top-0 right-44 xl:right-72 z-10">
    <div className="relative w-0 md:w-64 xl:w-80 h-auto">
      <Image src="/images/lamps.png" alt="ampoules" width="362" height="296" />
    </div>
  </div>
);

const FirstSection: React.FC = function () {
  return (
    <section className="relative bg-linear-2 md:h-screen w-full">
      <Container className="relative h-full flex flex-col-reverse md:grid md:grid-cols-2 items-center space-y-28 md:space-y-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: -1 * 2000,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                opacity: { delay: 0.1 },
              },
            },
          }}
          className="flex flex-col items-start space-y-6 pb-28 md:pb-0"
        >
          <h2 className="uppercase font-bold text-2xl -mb-4">été 2021</h2>
          <h1 className="font-bold text-5xl bg-clip-text text-transparent bg-linear-1">
            Une nouvelle collection
          </h1>
          <p className="text-base leading-loose">
            La nouvelle collection de meubles allie la fonctionnalité et le
            beauté. Comme d&apos;habitude, le mobilier est fait de matériaux
            respectueux de l&apos;environnement aux couleurs apaisantes. La
            nouvelle collection apporte du confort à votre maison.
          </p>
          <div className="flex justify-center items-center w-full">
            <Link href="/nouveaute">
              <span>
                <Button fill="primary">Découvrir</Button>
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: 2000,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                opacity: { delay: 0.1 },
              },
            },
          }}
          className="w-full h-52 md:h-full relative justify-center items-center z-10"
        >
          <Image
            src="/images/home-cover.png"
            alt="Cover image"
            layout="fill" // required
            objectFit="contain"
          />
        </motion.div>
        <Lamps />
      </Container>
      <HomeSphere className="hidden lg:block absolute top-0 right-0 w-1/3" />

      <MouseScroll
        className="hidden md:block absolute bottom-9 left-1/2 text-gray-700"
        style={{
          transform: 'translateX(-50%)',
        }}
      />
    </section>
  );
};

export default FirstSection;
