// queryは別ファイルで管理
// import { PageResponse, PostResponse, PostsResponse } from '@/domain';
import camelcaseKeys from 'camelcase-keys';
import axios, { AxiosResponse } from 'axios';
// import { allPosts, page, post, relatedPosts } from './post';

// const fetchAPI = async <T>(query: string, { variables }: { variables?: Record<string, unknown> } = {}): Promise<T> => {
//   const res = await fetch(process.env.WORDPRESS_API_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ query, variables })
//   });
//
//   const json = await res.json();
//   if (json.errors) {
//     console.log('error is', json.errors);
//     throw new Error('Failed to fetch API');
//   }
//   return json.data;
// };

// export const getRelatedPosts = async (categoryName = ''): Promise<PostsResponse> => {
//   return await fetchAPI<PostsResponse>(relatedPosts(categoryName));
// };
//
// export const getAllPosts = async (first: number, after = '', categoryName = ''): Promise<PostsResponse> => {
//   return await fetchAPI<PostsResponse>(allPosts(first.toString(), after, categoryName));
// };
//
// export const getPost = async (slug: string): Promise<PostResponse> =>
//   await fetchAPI<PostResponse>(post(), { variables: { id: slug, idType: 'SLUG' } });
//
// export const getPage = async (url: string): Promise<PageResponse> => await fetchAPI<PageResponse>(page(url));
//

export class Api {
  static async post<T>(query: string, { variables }: { variables?: Record<string, unknown> } = {}): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post<T>(
        process.env.WORDPRESS_API_URL,
        { query, variables },
      );
      console.log('repo ----------');
      console.log(response.data);
      console.log('repo ----------');
      return { ...response, data: camelcaseKeys(response.data, { deep: true }) } as AxiosResponse<T>;
    } catch (e) {
      console.log('haitta!', e);
      throw e;
    }
  }

}

// const headers = (token?: string) => {

// const APP_API_DOMAIN: string = (() => {
//   if (process.env.ENVIRONMENT === 'development' || process.env.STAGING) {
//     return 'http://localhost:3000';
//   } else {
//     return 'https://recreation.everyplus.jp';
//   }
// })();
