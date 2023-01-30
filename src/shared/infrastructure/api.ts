export class Api {
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
