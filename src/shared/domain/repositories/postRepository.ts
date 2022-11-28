import { PostResponse, PostsResponse } from '@/infrastructure/types';

export interface IPostRepository {
  getRelatedPosts: (categoryName?: string) => Promise<PostsResponse>;
  getAllPosts: (first: number, after?: string, categoryName?: string) => Promise<PostsResponse>;
  getPost: (slug: string) => Promise<PostResponse>;
}
