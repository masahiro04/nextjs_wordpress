import { getPost, PostResponse } from '@/domain';

export const fetchPost = async (slug: string): Promise<PostResponse> => {
  const response = await getPost(slug);
  return response;
};
