import Button from 'components/Button';
import Select from 'components/Select';
import { motion } from 'framer-motion';
import SendSVG from 'public/icons/send.svg';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import EmailSVG from 'public/icons/email.svg';
import TextInput from 'components/TextInput';

const elementAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ContactForm: React.FC = function () {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [typeDeDemande, setTypeDeDemande] = useState('special-command');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
        typeDeDemande,
        recaptchaToken: await executeRecaptcha('contact_form'),
      }),
    });
    setTypeDeDemande('');
    setEmail('');
    setMessage('');
  };
  return (
    <form className="md:w-1/2 lg:w-1/3 z-10" onSubmit={handleFormSubmit}>
      <motion.div
        className="flex flex-col items-start justify-center space-y-12 pr-10 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div
          variants={elementAnimationVariants}
          className="flex flex-col justify-start w-full space-y-5"
        >
          <h1 className="text-xl font-bold">Contacter nous</h1>
          <p className="text-base text-gray-700">
            Vous avez une question ou une remarque ? Ecrivez nous un message !
          </p>
        </motion.div>
        {/* Company infos */}
        <motion.div
          variants={elementAnimationVariants}
          className="flex flex-row justify-start w-full space-x-10"
        >
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
        </motion.div>
        <motion.div
          variants={elementAnimationVariants}
          className="w-full flex flex-col space-y-2"
        >
          <TextInput
            id="contact-email"
            type="email"
            placeholder="Votre mail ..."
            prefix={
              (<EmailSVG className="w-6 bg-none mr-4 text-gray-600" />) as any
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Adresse e-mail
          </TextInput>
        </motion.div>
        <motion.div
          variants={elementAnimationVariants}
          className="w-full flex flex-col space-y-2"
        >
          <label htmlFor="contact-purpose">Type de demande</label>
          <Select
            id="contact-purpose"
            className="w-full border border-gray-300"
            variant="none"
            value={typeDeDemande}
            onChange={(e) => setTypeDeDemande(e.target.value)}
          >
            <option value="special-command">Un besoin spécifique</option>
          </Select>
        </motion.div>
        <motion.div
          variants={elementAnimationVariants}
          className="w-full flex flex-col space-y-2"
          key="contact-message"
        >
          <div>
            <label htmlFor="contact-message">Type de demande</label>
            <textarea
              id="contact-message"
              placeholder="Votre message ..."
              className="resize-none w-full h-44 p-2 rounded border border-gray-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </motion.div>
        <motion.div
          variants={elementAnimationVariants}
          className="w-full flex flex-col space-y-2"
        >
          <Button fill="linear" className="w-full" type="submit">
            <SendSVG className="h-5 w-5" />
            <span>Envoyer</span>
          </Button>
        </motion.div>
      </motion.div>
    </form>
  );
};

export default ContactForm;
