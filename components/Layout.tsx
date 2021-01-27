import cls from 'classnames';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

type props = {
  children: React.ReactNode;
  navbar?: boolean;
  footer?: boolean;
  navbarOverlap?: boolean;
  title?: string;
};

const Layout: React.FC<props> = function ({
  children,
  navbar = true,
  footer = true,
  navbarOverlap = false,
  title,
}) {
  return (
    <>
      <Head>
        <title>Beans.{title ? ` | ${title}` : ''}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {navbar && <Navbar />}
      <div className={cls({ 'mt-24': navbar && !navbarOverlap })}>
        {children}
      </div>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
