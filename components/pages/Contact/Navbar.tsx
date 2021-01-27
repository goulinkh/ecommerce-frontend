import cls from 'classnames';
import Container from 'components/Container';
import Logo from 'components/Logo';

const ContactNavbar: React.FC = function () {
  return (
    <nav
      className={cls(
        'fixed top-0 left-0 w-screen bg-blur bg-white text-base z-20 bg-opacity-50'
      )}
    >
      <Container className="h-12 flex items-center">
        <Logo />
      </Container>
    </nav>
  );
};

export default ContactNavbar;
