// NOTE(okubo): dddはこちら
// export class FeaturedImage {
//   public constructor(private readonly _url: string) {}
//   get url(): string {
//     return this._url;
//   }

// }
// TODO(okubo): こちらはundefined許容したようが良い
export interface FeaturedImage {
  url: string;
  alt: string;
}
