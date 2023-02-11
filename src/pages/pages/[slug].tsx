import { PER_PAGE } from '@/constants';
import { fetchPostSlugsUseCase, fetchPostsUseCase, Post } from '@/domain';
import { Card, Layout, Pagination } from '@/presentation';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = Number(params?.slug) ?? 1;
  const offset = page === 1 ? 0 : PER_PAGE * page;

  const slugs = await fetchPostSlugsUseCase();
  const totalPage = Math.round(slugs.length / PER_PAGE);

  const posts = await fetchPostsUseCase(PER_PAGE, offset);
  return { props: { posts, totalPage } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchPostSlugsUseCase();
  const pages = Math.round(slugs.length / PER_PAGE);
  const paths = [...Array<number>(pages)].map((_, i) => `/pages/${i + 1}`);
  return {
    paths,
    fallback: false
  };
};

type Props = {
  posts: Post[];
  totalPage: number;
};

const Index: NextPage<Props> = ({ posts, totalPage }: Props) => {
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

export default Index;
