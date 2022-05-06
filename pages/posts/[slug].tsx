import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import { AboutMeSection } from '../../components/common/aboutMeSection';
import { SectionSeparator } from '../../components/common/separator';
import { Layout } from '../../components/layouts/layout';
import { Categories } from '../../components/post/categories';
import { ModePostPreview } from '../../components/post/morePostPreview';
import { PostBody } from '../../components/post/postBody';
import { PostHeader } from '../../components/post/postHeader';
import { PostHeaderImg } from '../../components/post/postHeaderImg';
import { getAllPosts, getPost, getRelatedPosts } from '../../lib/api';
import { Node, Post, PostsResponse } from '../../types/post';
import { isDevelopment } from '../../utils/helpers';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await getPost(params.slug.toString());
  const categoryNames = post.categories?.edges?.map((category) => category.node.name).join(', ');
  // NOTE(okubo): コンマで区切れば複数のカテゴリーを検索できる
  const relatedPosts: PostsResponse = await getRelatedPosts(categoryNames);

  return {
    props: {
      post,
      relatedPosts: relatedPosts.posts.edges
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getPostsWithOffset = async (
    posts: Array<Node>,
    _offset: string
  ): Promise<{ nodes: Array<Node>; hasNextPage: boolean; offset: string }> => {
    const res: PostsResponse = await getAllPosts(100, _offset);
    if (!res.posts.pageInfo.hasNextPage || isDevelopment()) {
      return {
        nodes: [...posts, ...res.posts.edges],
        hasNextPage: res.posts.pageInfo.hasNextPage,
        offset: res.posts.pageInfo.endCursor
      };
    }
    return getPostsWithOffset([...posts, ...res.posts.edges], res.posts.pageInfo.endCursor);
  };
  const { nodes } = await getPostsWithOffset([], '');

  return {
    paths: nodes.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false
  };
};
