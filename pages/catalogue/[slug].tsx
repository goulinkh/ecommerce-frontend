import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
}
