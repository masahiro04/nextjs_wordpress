import { PER_PAGE } from '@/constants';
import { fetchPostsUseCase, Post } from '@/domain';
import { filterByCategory, filterByWord } from '@/extension';
import { Card, Layout, Pagination } from '@/presentation';
import { useSearchWord } from '@/providers';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async () => {
  // todo: params.pageでoffsetかけたい
  const posts = await fetchPostsUseCase();
  return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // offsetかけたい or cacheでデータ取得制限をかけて負荷を減らしrたい
  const posts = await fetchPostsUseCase();
  const count = posts.length;
  const pages = count < PER_PAGE ? 1 : Math.floor(count / PER_PAGE);
  console.warn('hgoehoge------------------------4');
  const paths = [...Array<number>(pages)].map((_, i) => `/pagination/${i + 1}`);
  console.log({ paths, pages });
  return {
    paths,
    fallback: false
  };
};

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter();
  const { word } = useSearchWord();
  const category = router.query.categoryName?.toString();
  const pageNumber = Number(router.query.page) || 1;
  const start = pageNumber === 1 ? 0 : pageNumber * PER_PAGE;
  const postsToShow = (
    category === undefined ? filterByWord(posts, word) : filterByWord(filterByCategory(posts, category), word)
  ).slice(start, start + PER_PAGE);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className='space-y-2 sm:space-y-3'>
        {postsToShow.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <Pagination count={posts.length} />
      </div>
    </Layout>
  );
};

export default Index;
