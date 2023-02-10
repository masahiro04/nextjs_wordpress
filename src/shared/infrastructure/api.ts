export class Api {
  static async get<T>(path: string): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*'
    };
    return fetch(`${path}`, { headers, method: 'GET' }).then<T>(async (response) => {
      return response.json();
    });
  }
}
