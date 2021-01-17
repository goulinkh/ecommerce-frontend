import Head from "next/head";
import Navbar from "./Navbar";
import cls from "classnames";
import Footer from "./Footer";

export default function Layout({
  children,
  navbar = true,
  navbarOverlap = false,
  title,
}: {
  children: React.ReactNode;
  navbar?: boolean;
  navbarOverlap?: boolean;
  title?: String;
}) {
  return (
    <>
      <Head>
        <title>Beans.{title ? ` | ${title}` : ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {navbar && <Navbar />}
      <div className={cls({ "mt-24": navbar && !navbarOverlap })}>
        {children}
      </div>
      <Footer />
    </>
  );
}
