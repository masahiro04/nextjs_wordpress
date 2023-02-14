import { PostResponse } from '@/infrastructure/types';

export interface IPostRepository {
  getPosts: (perPage: number, offset: number, options: Record<string, string>) => Promise<Awaited<PostResponse[]>>;
  getPost: (slug: string) => Promise<Awaited<PostResponse>>;
  getRelatedPosts: (categoryIds: number[]) => Promise<Awaited<PostResponse[]>>;
}
