import cls from 'classnames';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const defaultDescription =
  'Découvrir de nouvelles passions, repenser votre intérieur, consommer mieux pour vivre mieux';

type props = {
  children: React.ReactNode;
  navbar?: boolean;
  footer?: boolean;
  navbarOverlap?: boolean;
  title?: string;
  className?: string;
  description?: string;
};

const Layout: React.FC<props> = function ({
  children,
  navbar = true,
  footer = true,
  navbarOverlap = false,
  title,
  className,
  description = defaultDescription,
}) {
  return (
    <>
      <Head>
        <title>Beans.{title ? ` | ${title}` : ''}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description}></meta>
        <meta name="robots" content="notranslate"></meta>
      </Head>
      <div className={className}>
        {navbar && <Navbar />}
        <div className={cls({ 'mt-24': navbar && !navbarOverlap })}></div>

        {children}
        {footer && <Footer />}
      </div>
    </>
  );
};

export default Layout;
