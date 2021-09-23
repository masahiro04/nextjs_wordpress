// queryは別ファイルで管理
import { allPosts, page, post, relatedPosts } from '../schemas/post';

const fetchAPI = async (query: string, { variables } = {} as any): Promise<any> => {
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query, variables　}),
  });

  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export const getRelatedPosts = async (categoryName = ''): Promise<unknown> => {
  const data = await fetchAPI(relatedPosts(categoryName));
  return data?.posts;
}

export const getAllPosts = async (first, after = '', categoryName = ''): Promise<unknown> => {
  const data = await fetchAPI(allPosts(first, after, categoryName));
  return data?.posts;
}

export const getPost = async (slug): Promise<unknown> =>
  await fetchAPI(post(), { variables: { id: slug, idType: 'SLUG' }});

export const getPage = async (url): Promise<unknown> => await fetchAPI(page(url));
