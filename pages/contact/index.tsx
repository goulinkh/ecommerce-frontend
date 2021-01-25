import Layout from "../../components/Layout";
import PagePatternSplitterSVG from "../../public/icons/page-pattern-splitter.svg";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

export default function Catalogue() {
  return (
    <Layout footer={false} navbar={false}>
      <Navbar />
      <SocialLinks className="fixed top-16 right-6 z-20" />
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between h-screen w-screen pt-24 md:pt-0">
        <ContactForm />
        <Map className="h-64 md:h-full w-full md:w-1/2 lg:w-2/3 mt-14 md:mt-0 relative">
          <PagePatternSplitterSVG className="hidden md:block h-full w-auto text-gray-50 absolute top-0 -right-20" />
        </Map>
      </div>
    </Layout>
  );
}
