import { fetchPostsUseCase, fetchPostUseCase, fetchRelatedPostsUseCase, Post } from '@/domain';
import { Categories, Layout, ModePostPreview, PostBody } from '@/presentation';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Post = await fetchPostUseCase((params?.slug ?? '').toString());
  const categoryNames: string = post.categories.map((category) => category.name).join(', ');
  const relatedPosts: Post[] = await fetchRelatedPostsUseCase(categoryNames);

  return {
    props: {
      post,
      relatedPosts
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPostsUseCase();
  return {
    paths: posts.map((post) => `/posts/${post.slug}`),
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

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // todo: imageには[.w-full.rounded-lg] classを適用したい
  return (
    <Layout title={post.title} description={post.excerpt} imageSrc={post.featuredImageUrl.url}>
      <Link href='/posts'>
        <div className='relative cursor-pointer duration-500 py-2 bg-white rounded-md shadow-sm px-2 bg-opacity-60 flex items-center w-24 justify-center text-gray-600 text-sm -translate-y-1 hover:shadow-md sm:-translate-y-2'>
          <span className='mr-1'>Back</span>
          <svg
            className='w-4 h-4 sm:h-5 sm:w-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'></path>
          </svg>
        </div>
      </Link>

      <div className='relative overflow-hidden py-8 bg-white bg-opacity-50 rounded-md shadow-md sm:py-16'>
        <div className='relative px-4 sm:px-6.lg:px-8'>
          <div className='mx-auto max-w-prose text-lg'>
            <Categories categories={post.categories} />
            {/*title*/}
            <h1 className='mb-8'>
              <span className='mt-2 block text-center text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                {post.title}
              </span>
            </h1>
          </div>
          <div className='prose prose-base prose-cyan mx-auto text-gray-600 sm:prose-lg'>
            <PostBody content={post.content} />
          </div>
        </div>
      </div>

      <div className='mt-5 mx-auto space-y-2 sm:space-y-3 sm:mt-10'>
        <div className='text-gray-700 text-xl font-semibold'>Featured</div>
        <div className='justify-center space-y-2 sm:space-y-3'>
          {relatedPosts.map((post) => (
            <ModePostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
