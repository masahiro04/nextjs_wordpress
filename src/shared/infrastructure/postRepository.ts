import { IPostRepository } from '..';
import { Api } from './api';
import { PostResponse } from './types';

export class PostRepository implements IPostRepository {
  private static baseUrl(): string {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    return `${url}/posts`;
  }

  public async getPosts(
    perPage: number,
    offset: number,
    options: Record<string, string>
  ): Promise<Awaited<PostResponse[]>> {
    const keys: string[] = options ? Object.keys(options) : [];
    const optionsString = keys
      .map((key): [string, string | undefined] => [key, options[key]])
      .filter((val): val is [string, string] => val[1] !== undefined)
      .map((val) => `${val[0]}=${val[1]}`)
      .join('&');
    return await Api.get<PostResponse[]>(
      `${PostRepository.baseUrl()}?per_page=${perPage}&offset=${offset}&${optionsString}`
    );
  }

  public async getPost(slug: string): Promise<Awaited<PostResponse>> {
    const response = await Api.get<PostResponse[]>(`${PostRepository.baseUrl()}?slug=${slug}`);
    if (!response.length) {
      throw Error('page not found');
    }
    const post = response[0];
    if (!post) {
      throw Error('page not found');
    }
    return post;
  }

  public async getRelatedPosts(categoryIds: number[]): Promise<Awaited<PostResponse[]>> {
    return await Api.get<PostResponse[]>(`${PostRepository.baseUrl()}?categories=${categoryIds.join(',')}`);
  }
}
