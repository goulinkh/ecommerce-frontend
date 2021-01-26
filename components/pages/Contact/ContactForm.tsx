import Button from "../../Button";
import makeAnimatedSeriesDiv from "../../makeAnimatedSeriesDiv";
import SendSVG from "../../../public/icons/send.svg";
import Select from "../../Select";

export default function ContactForm() {
  const AnimatedDiv = makeAnimatedSeriesDiv();
  return (
    <section className="md:w-1/2 lg:w-1/3 z-10 flex flex-col items-start justify-center space-y-12 px-10">
      <AnimatedDiv className="flex flex-col justify-start w-full space-y-5">
        <h1 className="text-xl font-bold">Contacter nous</h1>
        <p className="text-base text-gray-700">
          Vous avez une question ou une remarque ? Ecrivez nous un message !
        </p>
      </AnimatedDiv>
      {/* Company infos */}
      <AnimatedDiv className="flex flex-row justify-start w-full space-x-10">
        <div className="flex flex-col justify-between space-y-6">
          <h2 className="text-base font-bold">Adresse</h2>
          <p className="text-base">
            53 Boulevard Jean Brunhes
            <br />
            31300 Toulouse
          </p>
        </div>
        <div className="flex flex-col justify-between space-y-6">
          <h2 className="text-base font-bold">Coordonées</h2>
          <p className="text-base">
            +33-765-5568-12
            <br />
            contact@beans.fr
          </p>
        </div>
      </AnimatedDiv>
      <AnimatedDiv className="w-full flex flex-col space-y-2">
        <label htmlFor="contact-purpose">Type de demande</label>
        <Select
          id="contact-purpose"
          className="w-full border border-gray-300"
          variant="none"
        >
          <option value="special-command">Un besoin spécifique</option>
        </Select>
      </AnimatedDiv>
      <AnimatedDiv className="w-full flex flex-col space-y-2">
        <label htmlFor="contact-message">Type de demande</label>
        <textarea
          id="contact-message"
          placeholder="Votre message ..."
          className="resize-none w-full h-44 p-2 rounded border border-gray-300"
        ></textarea>
      </AnimatedDiv>
      <AnimatedDiv className="w-full flex flex-col space-y-2">
        <Button fill="linear" className="w-full">
          <SendSVG className="h-5 w-5" />
          <span>Envoyer</span>
        </Button>
      </AnimatedDiv>
    </section>
  );
}
