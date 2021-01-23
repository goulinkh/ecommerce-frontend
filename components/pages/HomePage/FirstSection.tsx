import { motion } from "framer-motion";
import Image from "next/image";
import HomeSphere from "../../../public/icons/home-sphere.svg";
import MouseScroll from "../../animated-icons/MouseScroll";
import Button from "../../Button";
import Container from "../../Container";

const Lamps = () => (
  <div className="absolute top-0 right-36 z-10">
    <div className="relative w-0 md:w-64 xl:w-80 h-auto">
      <Image src="/images/lamps.png" width="362" height="296" />
    </div>
  </div>
);

export default function FirstSection() {
  return (
    <section className="relative bg-linear-2 md:h-screen w-full">
      <Container className="relative overflow-hidden h-full flex flex-col-reverse md:grid md:grid-cols-2 items-center space-y-28 md:space-y-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: -1 * 2000,
            },
            visible: {
              translateX: 0,
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
            beauté. Comme d'habitude, le mobilier est fait de matériaux
            respectueux de l'environnement aux couleurs apaisantes. La nouvelle
            collection apporte du confort à votre maison.
          </p>
          <div className="flex justify-center items-center w-full">
            <Button fill="primary">Découvrir</Button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: 2000,
            },
            visible: {
              translateX: 0,
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
          transform: "translateX(-50%)",
        }}
      />
    </section>
  );
}
