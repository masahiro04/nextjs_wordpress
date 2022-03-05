import Link from "next/link";
import Image from "next/image";

export const CoverImage = ({ title, url, slug }): JSX.Element => {
  return (
    <div className="my-2">
      <Image
        src={url}
        alt={title}
        className="w-full"
        objectFit="contain"
        width={900}
        height={500}
      />
    </div>
  );
};
