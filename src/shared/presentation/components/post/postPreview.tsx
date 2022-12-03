import { Post } from '@/domain';
import { truncate } from '@/extension';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Date } from '../common/date';

type Props = {
  post: Post;
};

export const PostPreview: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`} className='z-0'>
      <div className='m-4'>
        <div className='md:h-44 h-20 md:w-64 w-32 relative'>
          <Image
            src={post.featuredImageUrl.url}
            alt={post.featuredImageUrl.alt}
            layout='fill'
            objectFit='contain'
            className='rounded'
          />
        </div>
        <h3
          className='mt-4 font-bold break-all text-gray-700 text-xl'
          dangerouslySetInnerHTML={{ __html: truncate(post.title ?? '', 30) }}
        />
        <div className='break-all text-gray-500' dangerouslySetInnerHTML={{ __html: truncate(post.excerpt, 100) }} />
        <div className='mt-2'>
          <Date dateString={post.date} />
        </div>
      </div>
    </Link>
  );
};
