import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

type Props = {
  title: string;
  url: string
  slug: string
}

export const CoverImage: React.FC<Props> = (props) => {
  const { title, url, slug } = props
  const image = (
    <Image
      src={url}
      alt={title}
      className="w-full"
      objectFit="contain"
      width={900}
      height={500}
    />
  );
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
