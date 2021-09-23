import Link from 'next/link';
import React from 'react';
import { reistrictCharacters } from '../../utils/helpers';
import Image from 'next/image'

const ModePostPreview = ({
  title,
  coverImage  = `${process.env.HOST_URL}/static/images/not_found.png`,
  slug,
}): JSX.Element =>(
  <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
    <a href={`/posts/${slug}`}>
      <div className="grid grid-cols-2 gap-4 my-2">
        <div className="m-auto">
          <p
            className="text-left text-gray-600 text-xl font-bold break-all my-auto"
            dangerouslySetInnerHTML={{ __html: reistrictCharacters(title, 80) }}
          />
        </div>
        <div className="m-auto">
          <Image
            className="h-32 rounded object-contain h-48 w-full"
            src={coverImage}
            alt={slug}
            loading="lazy"
            width={500}
            height={300}
          />
        </div>
      </div>
    </a>
  </Link>
);

export default ModePostPreview;
