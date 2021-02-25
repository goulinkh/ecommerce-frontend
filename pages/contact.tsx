import Button from 'components/Button';
import Layout from 'components/Layout';
import Modal from 'components/Modal';
import ContactForm from 'components/pages/Contact/ContactForm';
import ContactMap from 'components/pages/Contact/Map';
import ContactNavbar from 'components/pages/Contact/Navbar';
import SocialLinks from 'components/pages/Contact/SocialLinks';
import Link from 'next/link';
import PagePatternSplitterSVG from 'public/icons/page-pattern-splitter.svg';
import { useState } from 'react';

const Catalogue: React.FC = function () {
  const [modal, setModal] = useState({
    show: false,
    message: null,
    title: null,
    type: null,
  });
  return (
    <>
      <Layout footer={false} navbar={false} title="Contacter nous">
        <ContactNavbar />
        <SocialLinks className="fixed top-16 right-6 z-20" />
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between h-screen w-screen pt-24 md:pt-0">
          <ContactForm
            onSendFailure={({ title, message }) => {
              setModal({
                show: true,
                title,
                message,
                type: 'error',
              });
            }}
            onSendSuccess={({ title }) => {
              setModal({
                show: true,
                title,
                message: 'Nous essayerons de revenir vers vous rapidement 😃',
                type: 'success',
              });
            }}
          />
          <ContactMap className="h-64 md:h-full w-full md:w-1/2 lg:w-2/3 mt-14 md:mt-0 relative">
            <PagePatternSplitterSVG className="hidden md:block h-full w-auto text-gray-50 absolute top-0 -right-20" />
          </ContactMap>
        </div>
      </Layout>
      {modal.show && (
        <Modal
          {...modal}
          footer={() => {
            if (modal.type === 'success')
              return (
                <Link href="/">
                  <span>
                    <Button size="small" fill="primary">
                      Retour à la page d'accueil
                    </Button>
                  </span>
                </Link>
              );
            else
              return (
                <Button
                  size="small"
                  fill="outline"
                  onClick={() => {
                    setModal({
                      show: false,
                      message: null,
                      title: null,
                      type: null,
                    });
                  }}
                >
                  Fermer
                </Button>
              );
          }}
        />
      )}
    </>
  );
};

export default Catalogue;
