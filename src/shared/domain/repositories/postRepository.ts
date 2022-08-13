import { PostResponse, PostsResponse } from '@/domain';
import { allPosts, Api, post, relatedPosts } from '@/infrastructure';

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
