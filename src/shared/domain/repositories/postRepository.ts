import { PostResponse } from '@/infrastructure/types';

export interface IPostRepository {
  getPosts: (perPage: number, offset: number) => Promise<PostResponse[]>;
  getPost: (slug: string) => Promise<PostResponse>;
  getRelatedPosts: (categoryIds: number[]) => Promise<PostResponse[]>;
}
