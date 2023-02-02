import { Post } from '../entities';
import { FetchPostUseCase } from './fetchPost';
import { FetchPostsUseCase } from './fetchPosts';
import { FetchPostSlugsUseCase } from './fetchPostSlugs';

export * from './fetchPost';
export * from './fetchPosts';
export * from './fetchPostSlugs';

export const fetchPostsUseCase = async (perPage: number, offset: number): Promise<Post[]> => {
  return await new FetchPostsUseCase().execute(perPage, offset);
};
export const fetchPostUseCase = async (slug: string): Promise<Post> => {
  return await new FetchPostUseCase().execute(slug);
};

export const fetchPostSlugsUseCase = async (): Promise<string[]> => {
  return await new FetchPostSlugsUseCase().execute();
};
