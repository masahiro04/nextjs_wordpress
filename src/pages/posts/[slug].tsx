import { fetchPostSlugsUseCase, fetchPostUseCase, fetchRelatedPostsUseCase, Post } from '@/domain';
import { BackButton, Card, Categories, Layout, PostBody } from '@/presentation';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchPostUseCase((params?.slug ?? '').toString());
  const relatedPosts = (await fetchRelatedPostsUseCase(post.categories.map((category) => category.id)))
    .filter((relatedPost) => relatedPost.id !== post.id)
    .slice(0, 3);
  return {
    props: {
      post,
      relatedPosts
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchPostSlugsUseCase();
  return {
    paths: slugs.map((slug) => `/posts/${slug}`),
    fallback: false
  };
};

type Props = {
  post: Post;
  relatedPosts: Post[];
};

const PostPage: NextPage<Props> = (props: Props) => {
  const { post, relatedPosts } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  //
  // todo: imageには[.w-full.rounded-lg] classを適用したい
  return (
    <Layout title={post.title.rendered} description={post.excerpt.rendered}>
      <BackButton onClick={() => router.back()} />
      <div className='relative overflow-hidden py-8 bg-white bg-opacity-50 rounded-md shadow-md sm:py-16'>
        <div className='relative px-4 sm:px-6.lg:px-8'>
          <div className='mx-auto max-w-prose text-lg'>
            <Categories categories={post.categories} isLink={true} />
            <h1 className='mb-8'>
              <span className='mt-2 block text-center text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                {post.title.rendered}
              </span>
            </h1>
          </div>
          <div className='prose prose-base prose-cyan mx-auto text-gray-600 sm:prose-lg'>
            <PostBody content={post.content.rendered} />
          </div>
        </div>
      </div>

      {relatedPosts.length !== 0 && (
        <div className='mt-5 mx-auto space-y-2 sm:space-y-3 sm:mt-10'>
          <div className='text-gray-700 text-xl font-semibold'>Featured</div>
          <div className='justify-center space-y-2 sm:space-y-3'>
            {relatedPosts.map((post) => (
              <Card key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PostPage;
