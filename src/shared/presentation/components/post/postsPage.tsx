import { Post } from '@/domain';
import { useRouter } from 'next/router';
import { Pagination } from '../common';
import { Layout } from '../layouts';
import { Card } from './card';

type Props = {
  totalPage: number;
  posts: Post[];
};

export const PostsPage: React.FC<Props> = ({ posts, totalPage }: Props) => {
  const router = useRouter();
  const splitedPath = router.asPath.split('/');
  const currentPage = Number(splitedPath[splitedPath.length - 1]) ?? 0;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className='space-y-2 sm:space-y-3'>
        {posts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </div>
    </Layout>
  );
};
