import { PER_PAGE } from '@/constants';
import { fetchPostSlugsUseCase, fetchPostsUseCase, Post } from '@/domain';
import { PostsPage } from '@/presentation';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = Number(params?.slug) ?? 1;
  const offset = page === 1 ? 0 : PER_PAGE * page;

  const slugs = await fetchPostSlugsUseCase();
  console.log({ slugLength: slugs.length });
  const totalPages = Math.round(slugs.length / PER_PAGE);

  // todo: params.pageでoffsetかけたい
  const posts = await fetchPostsUseCase(PER_PAGE, offset);
  return { props: { posts, totalPages } };
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
  totalPages: number;
};

const Index: NextPage<Props> = ({ posts, totalPages }: Props) => {
  return <PostsPage posts={posts} totalPage={totalPages} />;
};

export default Index;
