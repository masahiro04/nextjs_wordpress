import Link from 'next/link';
import Image from 'next/image'

export const CoverImage = ({ title, url, slug }): JSX.Element => {
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

