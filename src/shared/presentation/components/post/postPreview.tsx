import { Post } from '@/domain';
import Link from 'next/link';
import React from 'react';
import { Date } from '../common/date';

type Props = {
  post: Post;
};

export const PostPreview: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <div className='relative w-full group cursor-pointer'>
      <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
        <div className='py-3 bg-white rounded-md max-w-full bg-opacity-60 font-semibold text-gray-600 truncate shadow-sm duration-500 px-3 sm:px-6 text-sm sm:text-base group-hover:shadow-lg group-hover:scale-[1.01] group-hover:bg-opacity-90'>
          {post.title}
          <div className='flex text-gray-400 font-thin text-sm'>
            <Date dateString={post.date} />
            <div className='flex space-x-2 items-center overflow-x-auto ml-2 pl-1'>
              {post.categories.map((category, key) => (
                <div key={key} className='relative group flex'>
                  <div className='w-3 h-3 rotate-45 left-0 bg-main-300 rounded-sm mt-0.5' />
                  <div className='bg-main-300 rounded-r-sm text-xs tracking-wide text-gray-500 -translate-x-1.5 pl-1.5 pr-1.5'>
                    {category.name}
                  </div>
                  <div className='absolute rounded-full bg-white bg-opacity-80 w-1 h-1 top-1.5 left-1' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
