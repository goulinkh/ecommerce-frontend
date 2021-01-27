import cls from 'classnames';
import Link from 'next/link';
import Facebook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';
import Twitter from 'public/icons/twitter.svg';

type props = { className?: string };

const SocialLinks: React.FC<props> = function ({ className }) {
  return (
    <div className={cls(className, 'flex flex-col justify-center space-y-5')}>
      <Link href="/#">
        <span>
          <Facebook className="w-6 h-w-6 cursor-pointer" />
        </span>
      </Link>
      <Link href="/#">
        <span>
          <Instagram className="w-6 h-w-6 cursor-pointer" />
        </span>
      </Link>
      <Link href="/#">
        <span>
          <Twitter className="w-6 h-w-6 cursor-pointer" />
        </span>
      </Link>
    </div>
  );
};

export default SocialLinks;
