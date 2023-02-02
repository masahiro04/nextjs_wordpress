import { IPostRepository } from '..';
import { Api } from './api';
import { PostResponse } from './types';

export class PostRepository implements IPostRepository {
  // public async getRelatedPosts(categoryName = ''): Promise<PostsResponse> {
  //   const response = await Api.post<PostsResponse>(relatedPostsSchema(categoryName));
  //   return response;
  // }

  public async getPosts(perPage: number, offset: number): Promise<PostResponse[]> {
    const response = await Api.get<PostResponse[]>(
      `https://mokubo.website//wp-json/wp/v2/posts?per_page=${perPage}&offset=${offset}`
    );
    return response;
  }

  // public async getAllPosts(first: number, after = '', categoryName = ''): Promise<PostsResponse> {
  //   const response = await Api.post<PostsResponse>(postsSchema(first.toString(), after, categoryName));
  //   return response;
  // }
  //
  public async getPost(slug: string): Promise<PostResponse> {
    console.log({ requested: `https://mokubo.website//wp-json/wp/v2/posts?slug=${slug}` });
    const response = await Api.get<PostResponse[]>(`https://mokubo.website//wp-json/wp/v2/posts?slug=${slug}`);
    if (!response.length) {
      throw Error('page not found');
    }
    return response[0];
  }
}
