import React from 'react'
import { useState } from 'react';
import { Layout } from '../components/layouts/layout';
import { getAllPosts } from '../lib/api';
import { PER_PAGE } from '../lib/constants';
import { Pagination } from '../components/common/pagination';
import { useRouter } from 'next/router';
import { PostPreview } from "../components/post/post-preview";
import { GetStaticProps, NextPage } from 'next';
import { generateRSSFeed } from '../utils/feed';
import { isDevelopment } from '../utils/helpers';

const Index: NextPage<any>= ({ allPosts: { edges } }) => {
  const router = useRouter();
  const [word, setWord] = useState<string>(router.query.word ? router.query.word.toString() : '');
  const category = router.query.categoryName;

  const filteredPosts = category === undefined
    ? filterByWord(edges, word)
    : filterByWord(filterByCategory(edges, category), word);

  const pageNumber = Number(router.query.page) || 1;

  const start = pageNumber === 1 ? 0 : pageNumber * PER_PAGE;

  const posts = router.query.categoryName === undefined
    ? filteredPosts.slice(start, start + PER_PAGE)
    : filteredPosts.slice(start, start + PER_PAGE);

  const handleSearch = async (newWord: string) => {
    await router.replace('/', undefined, { shallow: true });
    setWord(newWord);
  }

  return (
    <Layout handleSearch={handleSearch} setWord={setWord} word={word}>
      <div className="mt-3 mt-md-5">
        <div className="mx-auto text-center my-2">
          <h1 className="font-bold text-gray-700 break-all text-4xl border-indigo-800">
            { category === undefined ? 'All posts' : `タグ：${category}` }
          </h1>
        </div>
      </div>
      <div className="px-6 pb-8 mx-auto grid grid-cols-2 gap-y-5 gap-x-4 sm:px-10 sm:pb-14 sm:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-3 lg:gap-y-12 lg:gap-x-8 lg:pt-6">
        { posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node.sourceUrl}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        )) }
      </div>
      <div className="px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg">
        <Pagination count={filteredPosts.length} />
      </div>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  let edges = [];
  const postsBeforeFirstGet: any = await getAllPosts(100, "");
  edges = edges.concat(postsBeforeFirstGet.edges);
  let next = postsBeforeFirstGet.pageInfo.hasNextPage;
  let offset = postsBeforeFirstGet.pageInfo.endCursor;

  if(!isDevelopment()){
    while (next) {
      const postsAfterFirstGet: any = await getAllPosts(100, offset)
      Array.prototype.push.apply(edges, postsAfterFirstGet.edges);
      next = postsAfterFirstGet.pageInfo.hasNextPage;
      offset = postsAfterFirstGet.pageInfo.endCursor;
    }
  }
  const allPosts = { edges };
  generateRSSFeed(edges); // feedの生成
  return { props: { allPosts } }
}

const filterByCategory = (posts: Array<any>, target): any[] =>
  posts.filter((post) => ( post.node.categories?.edges?.filter(category => category.node.name === target ) ).length !== 0);

const filterByWord = (posts: Array<any>, word): any[] => {
  const reg = new RegExp(word);
  return posts.filter((post) => (reg.test(post.node['title']) || (reg.test(post.node['excerpt'])) || (reg.test(post.node['content']))));
}
