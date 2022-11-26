import { fetchAllPosts, fetchPost, fetchRelatedPosts, Node, Post, PostsResponse } from '@/domain';
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
  const response = await fetchPost((params?.slug ?? '').toString());
  const post = response.data.post;
  const categoryNames = post.categories?.edges?.map((category) => category.node.name).join(', ');

  // NOTE(okubo): コンマで区切れば複数のカテゴリーを検索できる
  const relatedPosts: PostsResponse = await fetchRelatedPosts(categoryNames);

  return {
    props: {
      post,
      relatedPosts: relatedPosts.data.posts.edges
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { nodes } = await fetchAllPosts([], '');
  return {
    paths: nodes.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false
  };
};

type Props = {
  post: Post;
  relatedPosts: Array<Node>;
};
const PostPage: NextPage<Props> = (props: Props) => {
  const { post, relatedPosts } = props;
  const router = useRouter();
  const morePosts = relatedPosts;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post?.title} description={post?.excerpt} imageSrc={post?.featuredImage?.node?.sourceUrl}>
      <div className='px-8 mx-auto sm:px-10 sm:max-w-screen-md md:max-w-3xl lg:max-w-3xl'>
        <div className='px-5 my-10'>
          <PostHeader title={post?.title} date={post?.date} authorName={post?.author?.node.name} />
          <PostHeaderImg title={post?.title} coverImage={post?.featuredImage?.node?.sourceUrl} />
          <Categories categories={post?.categories.edges} />
          <PostBody content={post?.content} />
          <AboutMeSection />
          <SectionSeparator />
          <h2 className='text-center'>関連記事</h2>
          <div className='my-3'>
            <div className='mx-auto'>
              {morePosts?.map(({ node }) => (
                <ModePostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage?.node?.sourceUrl}
                  slug={node.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
