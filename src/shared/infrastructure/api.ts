export class Api {
  static async get<T>(path: string): Promise<Awaited<T>> {
    const headers = { 'Content-Type': 'application/json' };
    return await fetch(`${path}`, { headers, method: 'GET' }).then<T>(async (response) => response.json());
  }
}
