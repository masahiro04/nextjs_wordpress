import { IPostRepository } from '..';
import { Api } from './api';
import { PostResponse } from './types';

export class PostRepository implements IPostRepository {
  public async getPosts(perPage: number, offset: number): Promise<PostResponse[]> {
    return await Api.get<PostResponse[]>(
      `https://mokubo.website//wp-json/wp/v2/posts?per_page=${perPage}&offset=${offset}`
    );
  }

  public async getPost(slug: string): Promise<PostResponse> {
    const response = await Api.get<PostResponse[]>(`https://mokubo.website//wp-json/wp/v2/posts?slug=${slug}`);
    if (!response.length) {
      throw Error('page not found');
    }
    return response[0];
  }

  public async getRelatedPosts(categoryIds: number[]): Promise<PostResponse[]> {
    return await Api.get<PostResponse[]>(
      `https://mokubo.website//wp-json/wp/v2/posts?categories=${categoryIds.join(',')}`
    );
  }
}
