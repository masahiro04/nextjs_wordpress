import { IPostRepository } from '..';
import { Api } from './api';
import { postSchema, postsSchema, relatedPostsSchema } from './schema';
import { PostResponse, PostsResponse } from './types';

export class PostRepository implements IPostRepository {
  public async getRelatedPosts(categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(relatedPostsSchema(categoryName));
    return response;
  }

  public async getAllPosts(first: number, after = '', categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(postsSchema(first.toString(), after, categoryName));
    return response;
  }

  public async getPost(slug: string): Promise<PostResponse> {
    const response = await Api.post<PostResponse>(postSchema(), { variables: { id: slug, idType: 'SLUG' } });
    return response;
  }
}
