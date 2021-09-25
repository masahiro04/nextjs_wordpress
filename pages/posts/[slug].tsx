import React, {useState} from 'react';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post/post-body'
import PostHeader from '../../components/post/post-header'
import SectionSeparator from '../../components/common/section-separator'
import Layout from '../../components/layouts/layout'
import { getAllPosts, getRelatedPosts, getPost } from '../../lib/api'
import PostHeaderImg from "../../components/post/post-header-img";
import Categories from "../../components/post/categories";
import ModePostPreview from "../../components/post/more-post-preview";
import { GetStaticPaths, GetStaticProps } from 'next';
import { isDevelopment } from '../../utils/helpers';
import AboutMeSection from '../../components/common/about_me_section';

const Post = ({ post, posts }) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  // 500ms入力がなければリダイレクト実行
  // https://omkz.net/archives/305
  const [timerId, setTimerId] = useState(null);
  const debounce = (fn, bufferInterval = 3000) => {
    return () => {
      clearTimeout(timerId);
      const timer = setTimeout(() => {
        fn();
      }, bufferInterval);
      setTimerId(timer);
    };
  };
  const handleWord = (newWord) => {
    debounce(() => {
      router.replace(`/?word=${newWord}`, undefined, {shallow: true});
    }, 500)();
  };

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout
      title={post?.title}
      description={post?.excerpt}
      imageSrc={post?.featuredImage?.node?.sourceUrl}
      setWord={handleWord}
    >
      <div className="px-8 mx-auto sm:px-10 sm:max-w-screen-md md:max-w-3xl lg:max-w-3xl">
        {router.isFallback
          ? <>Loading…</>
          : (
            <div className="px-5 my-10">
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author?.node}
              />
              <PostHeaderImg
                title={post.title}
                coverImage={post?.featuredImage?.node?.sourceUrl}
                slug={post.slug}
              />
              <Categories categories={post.categories} />
              <PostBody content={post.content} />
              <AboutMeSection />
              <SectionSeparator />
              <h2 className="text-center">関連記事</h2>
              <div className="my-3">
                <div className="mx-auto">
                  { morePosts?.map(({ node }) => (
                    <ModePostPreview
                      key={node.slug}
                      title={node.title}
                      coverImage={node.featuredImage?.node?.sourceUrl}
                      slug={node.slug}
                    />
                  )) }
                </div>
              </div>
            </div>
          )}
      </div>
    </Layout>
  );
}

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: any = await getPost(params.slug);
  const categoryName = data.post.categories.edges.map(category => category.node)[0]['name'];
  // とりあえず最初のカテゴリだけで検索
  // TODO: 理想は全部のカテゴリだけで抽出したい
  const relatedPost = await getRelatedPosts(categoryName);

  return {
    props: {
      post: data.post,
      posts: relatedPost,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // NOTE: pathをあらかじめ全部準備しておかないと404 error出るので対処してる
  // TODO: 全部APIにまとめたい
  let edges = [];
  const allP: any = await getAllPosts(!isDevelopment() ? 10 : 100, "");
  edges = edges.concat(allP.edges);
  let next = allP.pageInfo.hasNextPage;
  let offset = allP.pageInfo.endCursor;

  if(!isDevelopment()){
    while (next) {
      const allPInLoop: any = await getAllPosts(100, offset)
      edges = edges.concat(allPInLoop.edges);
      next = allPInLoop.pageInfo.hasNextPage;
      offset = allPInLoop.pageInfo.endCursor;
    }
  }

  const allPosts = { edges };

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false,
  }
}
