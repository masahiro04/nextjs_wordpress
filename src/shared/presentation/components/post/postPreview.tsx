import { truncate } from '@/extension';
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
        <div className='md:h-44 h-20 md:w-64 w-32 relative'>
          <Image
            src={coverImage}
            alt={slug}
            layout='fill'
            objectFit='contain'
            className='rounded'
          />
        </div>
        <h3
          className='mt-4 font-bold break-all text-gray-700 text-xl'
          dangerouslySetInnerHTML={{ __html: truncate(title, 30) }}
        />
        <div
          className='break-all text-gray-500'
          dangerouslySetInnerHTML={{ __html: truncate(excerpt, 100) }}
        />
        <div className='mt-2'>
          <Date dateString={date} />
        </div>
      </div>
    </Link>
  );
};
