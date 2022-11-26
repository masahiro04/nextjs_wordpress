import { Post } from '../entities';
import { FetchPostUseCase } from './fetchPost';
import { FetchPostsUseCase } from './fetchPosts';
import { FetchRelatedPostsUseCase } from './fetchRelatedPosts';

export * from './fetchPost';
export * from './fetchPosts';
export * from './fetchRelatedPosts';

export const fetchPostUseCase = async (slug: string): Promise<Post> => {
  return await new FetchPostUseCase().execute(slug);
};

export const fetchPostsUseCase = async (): Promise<Post[]> => {
  return await new FetchPostsUseCase().execute();
};

export const fetchRelatedPostsUseCase = async (categoryName: string): Promise<Post[]> => {
  return await new FetchRelatedPostsUseCase().execute(categoryName);
};
