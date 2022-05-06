// queryは別ファイルで管理
import { allPosts, page, post, relatedPosts } from '../schemas/post';
import { PostsResponse } from '../types/post';

const fetchAPI = async <T>(query: string, variables?: Record<string, unknown>): Promise<T> => {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

export const getRelatedPosts = async (categoryName = ''): Promise<PostsResponse> => {
  return await fetchAPI<PostsResponse>(relatedPosts(categoryName));
};

export const getAllPosts = async (first: number, after = '', categoryName = ''): Promise<PostsResponse> => {
  return await fetchAPI<PostsResponse>(allPosts(first.toString(), after, categoryName));
};

export const getPost = async (slug: string): Promise<unknown> =>
  await fetchAPI(post(), { variables: { id: slug, idType: 'SLUG' } });

export const getPage = async (url: string): Promise<unknown> => await fetchAPI(page(url));
