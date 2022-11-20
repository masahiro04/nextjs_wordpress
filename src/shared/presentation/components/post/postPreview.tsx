import { reistrictCharacters } from '@/extension';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Date } from '../common/date';

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  date: string;
};
export const PostPreview: React.FC<Props> = (props) => {
  const { title, coverImage = '/static/images/not_found.png', excerpt, slug, date } = props;
  return (
    <Link as={`/posts/${slug}`} href={`/posts/${slug}`} className='z-0'>
      <div className='m-4'>
        <Image
          className='rounded h-48 w-full -z-10'
          src={coverImage}
          alt={slug}
          loading='lazy'
          width={500}
          objectFit={'contain'}
          height={300}
        />
        <h3
          className='mt-4 font-bold break-all text-gray-700 text-xl'
          dangerouslySetInnerHTML={{ __html: reistrictCharacters(title, 30) }}
        />
        <div
          className='break-all text-gray-500'
          dangerouslySetInnerHTML={{ __html: reistrictCharacters(excerpt, 100) }}
        />
        <div className='mt-2'>
          <Date dateString={date} />
        </div>
      </div>
    </Link>
  );
};
