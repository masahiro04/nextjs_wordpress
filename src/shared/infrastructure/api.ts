export class Api {
  static async get<T>(path: string): Promise<T> {
    const headers = { 'Content-Type': 'application/json' };
    if (!process.env.WORDPRESS_API_URL) {
      throw Error('WORDPRESS_API_URL is not set');
    }
    return fetch(`${path}`, { headers, method: 'GET' }).then<T>((response) => response.json());
  }

  static async post<T>(query: string, { variables }: { variables?: Record<string, unknown> } = {}): Promise<T> {
    const headers = { 'Content-Type': 'application/json' };

    // WPGraphQL Plugin must be enabled
    return fetch(process.env.WORDPRESS_API_URL ?? '', {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      })
    }).then<T>((response) => response.json());
  }
}
