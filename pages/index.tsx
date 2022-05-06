import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Pagination } from '../components/common/pagination';
import { Layout } from '../components/layouts/layout';
import { PostPreview } from '../components/post/post-preview';
import { getAllPosts } from '../lib/api';
import { PER_PAGE } from '../lib/constants';
import { Node, PostsResponse } from '../types/post';
import { generateRSSFeed } from '../utils/feed';
import { isDevelopment } from '../utils/helpers';

type Props = {
  nodes: Array<Node>;
};

const Index: NextPage<Props> = (props: Props) => {
  const { nodes } = props;
  const router = useRouter();
  const [word, setWord] = useState<string>(router.query.word ? router.query.word.toString() : '');
  const category = router.query.categoryName?.toString();

  const filteredPosts =
    category === undefined ? filterByWord(nodes, word) : filterByWord(filterByCategory(nodes, category), word);

  const pageNumber = Number(router.query.page) || 1;

  const start = pageNumber === 1 ? 0 : pageNumber * PER_PAGE;

  const posts =
    router.query.categoryName === undefined
      ? filteredPosts.slice(start, start + PER_PAGE)
      : filteredPosts.slice(start, start + PER_PAGE);

  const handleSearch = async (newWord: string) => {
    await router.replace('/', undefined, { shallow: true });
    setWord(newWord);
  };

  return (
    <Layout handleSearch={handleSearch} setWord={setWord} word={word}>
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

  generateRSSFeed(nodes); // feedの生成
  return { props: { nodes } };
};

const filterByCategory = (posts: Array<Node>, target: string): Array<Node> =>
  posts.filter(
    (post) => (post.node.categories?.edges?.filter((category) => category.node.name === target)).length !== 0
  );

const filterByWord = (
  posts: Array<Node>, word: string,
): Array<Node> => {
  const reg = new RegExp(word);
  return posts.filter(
    (post) => reg.test(post.node['title'])
      || reg.test(post.node['excerpt'])
        || reg.test(post.node['content']));

}

