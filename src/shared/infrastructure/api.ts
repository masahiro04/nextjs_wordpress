import axios, { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export class Api {
  static async post<T>(
    query: string,
    { variables }: { variables?: Record<string, unknown> } = {}
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post<T>(process.env.WORDPRESS_API_URL, { query, variables });
      return { ...response, data: camelcaseKeys(response.data, { deep: true }) } as AxiosResponse<T>;
    } catch (e) {
      console.log('haitta!', e);
      throw e;
    }
  }
}
