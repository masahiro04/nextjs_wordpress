import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { reistrictCharacters } from '@/extensions';

type Props = {
  title: string;
  coverImage: string;
  slug: string;
};

export const ModePostPreview: React.FC<Props> = (props) => {
  const { title, coverImage = '/static/images/not_found.png', slug } = props;

  return (
    <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
      <a href={`/posts/${slug}`}>
        <div className='grid grid-cols-5 gap-4 lg:my-1 my-3'>
          <div className='col-span-3 m-auto'>
            <p
              className='text-left text-gray-600 text-xl font-bold break-all my-auto'
              dangerouslySetInnerHTML={{ __html: reistrictCharacters(title, 80) }}
            />
          </div>
          <div className='col-span-2 m-auto'>
            <Image
              className='rounded object-contain w-full'
              src={coverImage}
              alt={slug}
              loading='lazy'
              width={200}
              height={120}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};
