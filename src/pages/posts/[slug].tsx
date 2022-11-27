import { fetchPostsUseCase, fetchPostUseCase, fetchRelatedPostsUseCase, Post } from '@/domain';
import {
  AboutMeSection,
  Categories,
  Layout,
  ModePostPreview,
  PostBody,
  PostHeader,
  PostHeaderImg,
  SectionSeparator
} from '@/presentation';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
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

  return (
    <Layout title={post.title} description={post.excerpt} imageSrc={post.featuredImageUrl.url}>
      <div className='px-8 mx-auto sm:px-10 sm:max-w-screen-md md:max-w-3xl lg:max-w-3xl'>
        <div className='px-5 my-10'>
          <PostHeader title={post.title} date={post.date} authorName={post.author.name} />
          <PostHeaderImg title={post.title} coverImage={post.featuredImageUrl.url} />
          <Categories categories={post.categories} />
          <PostBody content={post.content} />
          <AboutMeSection />
          <SectionSeparator />
          <h2 className='text-center'>関連記事</h2>
          <div className='my-3'>
            <div className='mx-auto'>
              {relatedPosts.map((post) => (
                <ModePostPreview key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
