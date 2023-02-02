import { PostResponse } from '@/infrastructure/types';

export interface IPostRepository {
  // getRelatedPosts: (categoryName?: string) => Promise<PostsResponse>;
  // getAllPosts: (first: number, after?: string, categoryName?: string) => Promise<PostsResponse>;
  getPosts: (perPage: number, offset: number) => Promise<PostResponse[]>;
  getPost: (slug: string) => Promise<PostResponse>;
}
