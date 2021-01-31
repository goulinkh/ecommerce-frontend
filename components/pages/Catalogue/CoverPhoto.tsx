import Image from 'components/Image';
type props = { special?: boolean };

const CoverPhoto: React.FC<props> = ({ special = false }) => (
  <div className="relative w-screen h-52 xl:h-72">
    <Image
      objectFit="cover"
      layout="fill"
      src={
        special
          ? '/images/summer-vipe-catalogue-cover.png'
          : '/images/catalogue-cover.png'
      }
      alt="Bureau propre"
    ></Image>
  </div>
);
export default CoverPhoto;
