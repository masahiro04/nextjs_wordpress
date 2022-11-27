// NOTE(okubo): dddはこちら
// export class FeaturedImage {
//   public constructor(private readonly _url: string) {}
//   get url(): string {
//     return this._url;
//   }

// }
export interface FeaturedImage {
  url: string;
  alt: string;
}
