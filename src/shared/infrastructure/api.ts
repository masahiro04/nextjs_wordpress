import axios, { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export class Api {
  static async post<T>(
    query: string,
    { variables }: { variables?: Record<string, unknown> } = {}
  ): Promise<AxiosResponse<T>> {
    const response = await axios.post<T>(process.env.WORDPRESS_API_URL ?? '', { query, variables });
    return {
      ...response,
      data: camelcaseKeys(response.data as Record<string, unknown>, { deep: true })
    } as AxiosResponse<T>;
  }
}
