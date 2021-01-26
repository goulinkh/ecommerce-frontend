import PagePatternSplitterSVG from "../public/icons/page-pattern-splitter.svg";
import Layout from "../components/Layout";
import ContactForm from "../components/pages/Contact/ContactForm";
import ContactMap from "../components/pages/Contact/Map";
import ContactNavbar from "../components/pages/Contact/Navbar";
import SocialLinks from "../components/pages/Contact/SocialLinks";

export default function Catalogue() {
  return (
    <Layout footer={false} navbar={false}>
      <ContactNavbar />
      <SocialLinks className="fixed top-16 right-6 z-20" />
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between h-screen w-screen pt-24 md:pt-0">
        <ContactForm />
        <ContactMap className="h-64 md:h-full w-full md:w-1/2 lg:w-2/3 mt-14 md:mt-0 relative">
          <PagePatternSplitterSVG className="hidden md:block h-full w-auto text-gray-50 absolute top-0 -right-20" />
        </ContactMap>
      </div>
    </Layout>
  );
}
