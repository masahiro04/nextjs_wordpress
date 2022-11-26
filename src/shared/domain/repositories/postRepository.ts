import { allPosts, Api, post, relatedPosts } from '@/infrastructure';
import { PostResponse, PostsResponse } from '@/infrastructure/types';

export const getRelatedPosts = async (categoryName = ''): Promise<PostsResponse> => {
  const response = await Api.post<PostsResponse>(relatedPosts(categoryName));
  return response.data;
};

export const getAllPosts = async (first: number, after = '', categoryName = ''): Promise<PostsResponse> => {
  const response = await Api.post<PostsResponse>(allPosts(first.toString(), after, categoryName));
  return response.data;
};

export const getPost = async (slug: string): Promise<PostResponse> => {
  const response = await Api.post<PostResponse>(post(), { variables: { id: slug, idType: 'SLUG' } });
  return response.data;
};

export interface IPostRepository {
  getRelatedPosts: (categoryName?: string) => Promise<PostsResponse>;
  getAllPosts: (first: number, after?: string, categoryName?: string) => Promise<PostsResponse>;
  getPost: (slug: string) => Promise<PostResponse>;
}
