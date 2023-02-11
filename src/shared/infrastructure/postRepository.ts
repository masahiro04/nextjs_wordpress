import { IPostRepository } from '..';
import { Api } from './api';
import { PostResponse } from './types';

export class PostRepository implements IPostRepository {
  public async getPosts(perPage: number, offset: number): Promise<PostResponse[]> {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    return await Api.get<PostResponse[]>(`${url}/posts?per_page=${perPage}&offset=${offset}`);
  }

  public async getPost(slug: string): Promise<PostResponse> {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    const response = await Api.get<PostResponse[]>(`${url}/posts?slug=${slug}`);
    if (!response.length) throw Error('page not found');
    return response[0];
  }

  public async getRelatedPosts(categoryIds: number[]): Promise<PostResponse[]> {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    return await Api.get<PostResponse[]>(`${url}/posts?categories=${categoryIds.join(',')}`);
  }
}
