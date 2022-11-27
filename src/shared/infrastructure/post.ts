import { Api, IPostRepository } from '..';
import { PostResponse, PostsResponse } from './types';
import { allPosts, post, relatedPosts } from './types/schema';

export class PostRepository implements IPostRepository {
  public async getRelatedPosts(categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(relatedPosts(categoryName));
    return response.data;
  }

  public async getAllPosts(first: number, after = '', categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(allPosts(first.toString(), after, categoryName));
    return response.data;
  }

  public async getPost(slug: string): Promise<PostResponse> {
    const response = await Api.post<PostResponse>(post(), { variables: { id: slug, idType: 'SLUG' } });
    return response.data;
  }
}
