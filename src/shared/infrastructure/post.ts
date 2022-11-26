import { PostResponse, PostsResponse } from "./types";
import { Api, IPostRepository, relatedPosts ,allPosts, post} from "..";

export class PostRepository implements IPostRepository {
   public async getRelatedPosts(categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(relatedPosts(categoryName));
    return response.data;
  };

  public async getAllPosts(first: number, after = '', categoryName = ''): Promise<PostsResponse> {
    const response = await Api.post<PostsResponse>(allPosts(first.toString(), after, categoryName));
    return response.data;
  };

  public async getPost(slug: string): Promise<PostResponse> {
    const response = await Api.post<PostResponse>(post(), { variables: { id: slug, idType: 'SLUG' } });
    return response.data;
  };
}
