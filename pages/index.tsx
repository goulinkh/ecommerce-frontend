import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";
import Layout from "../components/Layout";
import ProgressBar from "../components/ProgressBar";
import Select from "../components/Select";
import HomeSphere from "../public/icons/home-sphere.svg";
import Mouse from "../public/icons/mouse.svg";
export default function Home() {
  return (
    <Layout navbarOverlap>
      {/* Cover section */}
      <section className="relative bg-linear-2 h-screen w-full">
        <Container className="w-full h-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-start w-full lg:w-148 lg:px-10 space-y-6 pt-28 lg:pt-0">
            <h2 className="uppercase font-bold text-2xl -mb-4">été 2021</h2>
            <h1 className="font-bold text-5xl bg-clip-text text-transparent bg-linear-1">
              Une nouvelle collection
            </h1>
            <p className="text-base leading-loose">
              La nouvelle collection de meubles allie la fonctionnalité et le
              beauté. Comme d'habitude, le mobilier est fait de matériaux
              respectueux de l'environnement aux couleurs apaisantes. La
              nouvelle collection apporte du confort à votre maison.
            </p>
            <div className="flex justify-center items-center w-full">
              <Button fill="primary">Découvrir</Button>
            </div>
          </div>
          <div className="relative h-2/4 lg:h-full w-full lg:w-148 flex justify-center items-center z-10">
            <Image
              src="/images/home-cover.png"
              alt="Cover image"
              layout="fill" // required
              objectFit="contain"
            />
          </div>
        </Container>
        <HomeSphere className="hidden lg:block absolute top-0 right-0 w-1/3" />
        <Mouse className="absolute bottom-9 left-1/2"/>
      </section>
    </Layout>
  );
}
