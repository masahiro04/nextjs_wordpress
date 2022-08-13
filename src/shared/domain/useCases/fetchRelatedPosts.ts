import { getRelatedPosts, PostsResponse } from '@/domain';

export const fetchRelatedPosts = async (categoryName: string): Promise<PostsResponse> => {
  const response = await getRelatedPosts(categoryName);
  return response;
};
