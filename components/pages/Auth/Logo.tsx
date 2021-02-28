import Logo from 'components/Logo';
import cls from 'classnames';

type props = { position: 'left' | 'right' };
const AuthLogo: React.FC<props> = ({ position }) => (
  <Logo
    className={cls('hidden md:block absolute top-32 z-10 text-4xl', {
      'left-32': position === 'left',
      'right-32': position === 'right',
    })}
  />
);

export default AuthLogo;
