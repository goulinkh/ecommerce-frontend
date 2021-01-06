import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Product () {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
}
