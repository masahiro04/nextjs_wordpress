// NOTE(okubo): dddではこちら
// export class Category {
//   public constructor(private readonly _name: string) {}
//
//   get name(): string {
//     return this._name;
//   }
// }

export interface Category {
  name: string;
}
