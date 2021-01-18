import Layout from "../../components/Layout";
import PagePatternSplitterSVG from "../../public/icons/page-pattern-splitter.svg";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

export default function Category() {
  return (
    <Layout footer={false} navbar={false}>
      <Navbar />
      <div className="flex flex-row items-center justify-between h-screen w-screen">
        <Map className="h-full w-2/3 relative">
          <PagePatternSplitterSVG className="h-full w-auto text-gray-50 absolute top-0 -right-20" />
        </Map>
        <SocialLinks className="fixed top-16 right-6 z-20" />
        <ContactForm />
      </div>
    </Layout>
  );
}
