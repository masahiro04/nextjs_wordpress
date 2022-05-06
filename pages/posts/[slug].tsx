import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

  const [word, setWord] = useState<string>('');

  const handleSearch = () => router.replace(`/?word=${word}`, undefined, { shallow: true });

  console.log('hogehoge', post);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={post?.title}
      description={post?.excerpt}
      imageSrc={post?.featuredImage?.node?.sourceUrl}
      setWord={setWord}
      word=''
      handleSearch={handleSearch}
    >
      <div className='px-8 mx-auto sm:px-10 sm:max-w-screen-md md:max-w-3xl lg:max-w-3xl'>
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <div className='px-5 my-10'>
            <PostHeader title={post?.title} date={post?.date} authorName={post?.author?.node.name} />
            <PostHeaderImg title={post?.title} coverImage={post?.featuredImage?.node?.sourceUrl} slug={post?.slug} />
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
        )}
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await getPost(params.slug.toString());
  // console.log('page is', post.date);
  const categoryName = post.categories?.edges?.map((category) => category.node)[0]['name'];
  // とりあえず最初のカテゴリだけで検索
  // TODO: 理想は全部のカテゴリだけで抽出したい
  const relatedPosts: PostsResponse = await getRelatedPosts(categoryName);
  // console.log('relatedPosts', relatedPosts.posts.edges);

  return {
    props: {
      post,
      relatedPosts: relatedPosts.posts.edges
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // NOTE: pathをあらかじめ全部準備しておかないと404 error出るので対処してる
  // TODO: 全部APIにまとめたい
  let nodes: Array<Node> = [];
  const postsBeforeFirstGet: PostsResponse = await getAllPosts(100, '');
  // console.log('response is ', postsBeforeFirstGet.posts.edges);
  nodes = nodes.concat(postsBeforeFirstGet.posts.edges);
  let next = postsBeforeFirstGet.posts.pageInfo.hasNextPage;
  let offset = postsBeforeFirstGet.posts.pageInfo.endCursor;

  if (!isDevelopment()) {
    while (next) {
      const postsAfterFirstGet: PostsResponse = await getAllPosts(100, offset);
      Array.prototype.push.apply(nodes, postsAfterFirstGet.posts.edges);
      next = postsAfterFirstGet.posts.pageInfo.hasNextPage;
      offset = postsAfterFirstGet.posts.pageInfo.endCursor;
    }
  }

  return {
    paths: nodes.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false
  };
};
