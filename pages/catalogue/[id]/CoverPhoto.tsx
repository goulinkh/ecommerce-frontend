import Image from "next/image";

const CoverPhoto = () => (
  <div className="relative w-screen h-80">
    <Image
      objectFit="cover"
      layout="fill"
      src="/images/catalogue-cover.png "
    ></Image>
  </div>
);
export default CoverPhoto;
