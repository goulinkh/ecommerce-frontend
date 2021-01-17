import { motion } from "framer-motion";
import Image from "next/image";
import MouseScroll from "../animated-icons/MouseScroll";
import Button from "../Button";
import Container from "../Container";
import HomeSphere from "../../public/icons/home-sphere.svg";

export default function FirstSection() {
  return (
    <section className="relative bg-linear-2 h-screen w-full">
      <Container className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          className="flex flex-col items-start w-full lg:w-148 lg:pr-10 space-y-6 pt-28 lg:pt-0"
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
        <div className="hidden md:block relative h-2/4 lg:h-full w-full lg:w-148 justify-center items-center z-10">
          <Image
            src="/images/home-cover.png"
            alt="Cover image"
            layout="fill" // required
            objectFit="contain"
          />
        </div>
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
