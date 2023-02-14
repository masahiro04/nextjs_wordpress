import { CategoryResponse, ICategoryRepository } from '..';
import { Api } from './api';

export class CategoryRepository implements ICategoryRepository {
  private static baseUrl(): string {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    return `${url}/categories`;
  }

  public async getCategories(): Promise<Awaited<CategoryResponse[]>> {
    return await Api.get<CategoryResponse[]>(`${CategoryRepository.baseUrl()}?per_page=100`);
  }
}
