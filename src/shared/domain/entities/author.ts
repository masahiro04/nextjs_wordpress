// NOTE(okubo): dddではこちら
// export class Author {
//   public constructor(private readonly _name: string) {}
//
//   get name(): string {
//     return this._name;
//   }
// }
export interface Author {
  name: string;
}
