'use client';
import { PER_PAGE } from '@/constants';
import { fetchPostsUseCase, Post } from '@/domain';
import { filterByCategory, filterByWord } from '@/extension';
import { Layout, Pagination } from '@/presentation';
import { Card } from '@/presentation/components/post';
import { useSearchWord } from '@/providers';
import { NextPage } from 'next';
// import { useRouter } from 'next/router';

import { useSearchParams } from 'next/navigation';
import { use } from 'react';

const getData = async (): Promise<Post[]> => {
  const posts = await fetchPostsUseCase();
  return posts;
};

const Index: NextPage = () => {
  const posts = use(getData());
  // const router = useRouter();
  const { word } = useSearchWord();
  // const category = router.query.categoryName?.toString();

  const searchParams = useSearchParams();
  const categoryName = searchParams.get('categoryName') ?? '';
  const page = searchParams.get('page') ?? 1;

  const pageNumber = Number(page) || 1;
  const start = pageNumber === 1 ? 0 : pageNumber * PER_PAGE;
  const postsToShow = (
    categoryName === undefined ? filterByWord(posts, word) : filterByWord(filterByCategory(posts, categoryName), word)
  ).slice(start, start + PER_PAGE);

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Layout>
      <div className='space-y-2 sm:space-y-3'>
        {postsToShow.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <Pagination count={posts.length} />
      </div>
    </Layout>
  );
};

export default Index;
