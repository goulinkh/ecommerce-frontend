import Logo from 'components/Logo';
import cls from 'classnames';

type props = { position: 'left' | 'right' };
const AuthLogo: React.FC<props> = ({ position }) => (
  <Logo
    className={cls('hidden md:block absolute top-20 z-10', {
      'left-32': position === 'left',
      'right-32': position === 'right',
    })}
  />
);

export default AuthLogo;
