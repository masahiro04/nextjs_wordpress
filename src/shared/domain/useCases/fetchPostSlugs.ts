import { IPostRepository } from '@/domain';
import { isDevelopment } from '@/extension';
import { PostRepository, PostResponse } from '@/infrastructure';

export class FetchPostSlugsUseCase {
  private readonly postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  private async makePosts(posts: PostResponse[]): Promise<PostResponse[]> {
    const response = await this.postRepository.getPosts(100, posts.length);
    if (response.length < 100 || isDevelopment()) {
      return [...posts, ...response];
    }
    return this.makePosts([...posts, ...response]);
  }

  public async execute(): Promise<string[]> {
    const posts = await this.makePosts([]);
    return posts.map((post) => post.slug);
  }
}
