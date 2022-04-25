import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

type Props = {
  title: string;
  url: string
  slug: string
}

export const CoverImage: React.FC<Props> = (props): JSX.Element => {
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
      { slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title} href="/[slug]">{image}</a>
        </Link>
      ) : image }
    </div>
  );
}

