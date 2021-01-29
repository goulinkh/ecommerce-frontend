import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const I: React.FC<ImageProps> = (props) => {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <ImageNotAvailable />
  ) : (
    <Image {...props} onError={() => setFailed(true)} />
  );
};

export default I;

const ImageNotAvailable: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full h-full opacity-50">
      <svg
        className="w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
      <span>Image non disponible</span>
    </div>
  );
};
