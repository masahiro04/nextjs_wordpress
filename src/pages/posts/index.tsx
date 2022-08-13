import { PER_PAGE } from '@/constants';
import { getAllPosts, Node, PostsResponse } from '@/domain';
import { filterByCategory, filterByWord, isDevelopment } from '@/extensions';
import { Layout, Pagination, PostPreview } from '@/presentation';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

type Props = {
  nodes: Array<Node>;
};

const Index: NextPage<Props> = (props: Props) => {
  const { nodes } = props;
  const router = useRouter();
  const word = router.query.word ? router.query.word.toString() : '';
  const category = router.query.categoryName?.toString();
  const filteredPosts =
    category === undefined ? filterByWord(nodes, word) : filterByWord(filterByCategory(nodes, category), word);
  const pageNumber = Number(router.query.page) || 1;
  const start = pageNumber === 1 ? 0 : pageNumber * PER_PAGE;
  const posts = filteredPosts.slice(start, start + PER_PAGE);

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
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node.sourceUrl}
            slug={node.slug}
            excerpt={node.excerpt}
            date={node?.date}
          />
        ))}
      </div>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <Pagination count={filteredPosts.length} />
      </div>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const getPostsWithOffset = async (
    posts: Array<Node>,
    _offset: string
  ): Promise<{ nodes: Array<Node>; hasNextPage: boolean; offset: string }> => {
    const res: PostsResponse = await getAllPosts(100, _offset);
    console.log('ohgehoge----------');
    console.log(res);
    console.log('ohgehoge----------');
    if (!res.data.posts.pageInfo.hasNextPage || isDevelopment()) {
      return {
        nodes: [...posts, ...res.data.posts.edges],
        hasNextPage: res.data.posts.pageInfo.hasNextPage,
        offset: res.data.posts.pageInfo.endCursor
      };
    }
    return getPostsWithOffset([...posts, ...res.data.posts.edges], res.data.posts.pageInfo.endCursor);
  };
  const { nodes } = await getPostsWithOffset([], '');
  return { props: { nodes } };
};
