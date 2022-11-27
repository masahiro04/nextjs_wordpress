import { PER_PAGE } from '@/constants';
import { fetchPostsUseCase, Post } from '@/domain';
import { filterByCategory, filterByWord } from '@/extension';
import { Layout, Pagination, PostPreview } from '@/presentation';
import { useSearchWord } from '@/providers';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPostsUseCase();
  return { props: { posts } };
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
  const filteredPosts = (
    category === undefined ? filterByWord(posts, word) : filterByWord(filterByCategory(posts, category), word)
  ).slice(start, start + PER_PAGE);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className='mt-3 mt-md-5'>
        <div className='mx-auto text-center my-2'>
          <h1 className='font-bold text-gray-700 break-all text-4xl border-indigo-800'>
            {category === undefined ? 'All posts' : `タグ：${category}`}
          </h1>
        </div>
      </div>
      <div className='px-6 pb-8 mx-auto grid grid-cols-2 gap-y-5 gap-x-4 sm:px-10 sm:pb-14 sm:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-3 lg:gap-y-12 lg:gap-x-8 lg:pt-6'>
        {filteredPosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <Pagination count={filteredPosts.length} />
      </div>
    </Layout>
  );
};

export default Index;
