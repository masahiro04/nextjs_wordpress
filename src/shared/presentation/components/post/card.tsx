import { Post } from '@/domain';
import Link from 'next/link';
import { Date } from '../common/date';
import { Categories } from './categories';

type Props = {
  post: Post;
};

export const Card: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className='relative w-full group cursor-pointer'>
      <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
        <div className='py-3 bg-white rounded-md max-w-full bg-opacity-60 font-semibold text-gray-600 truncate shadow-sm duration-500 px-3 sm:px-6 text-sm sm:text-base group-hover:shadow-lg group-hover:scale-[1.01] group-hover:bg-opacity-90'>
          {post.title.rendered}
          <div className='flex text-gray-400 font-thin text-sm'>
            <Date dateString={post.date} />
            <div className='ml-2 my-auto'>
              <Categories categories={post.categories} isLink={false} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
