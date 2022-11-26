export class FeaturedImage {
  public constructor(
    private readonly _url: string
  ){}
  get url(): string {
    return this._url;
  }
}

export class Author {
  public constructor(
    private readonly _name: string,
  ){}

  get name(): string {
    return this._name;
  }
}

export class Category {
  public constructor(
    private readonly _name: string,
  ){}

  get name(): string {
    return this._name;
  }
}

export class Post {
  constructor(
    private readonly _slug: string,
    private readonly _title: string,
    private readonly _excerpt: string,
    private readonly _content: string,
    private readonly _date: string,
    private readonly _featuredImageUrl: string,
    private readonly _author: Author,
    private readonly _categories: Category[],
  ) {}

  get title(): string {
    return this._title;
  }
  get slug(): string {
    return this._slug;
  }
  get excerpt(): string {
    return this._excerpt;
  }
  get content(): string {
    return this._content;
  }
  get date(): string {
    return this._date;
  }
  get featuredImageUrl(): string {
    return this._featuredImageUrl;
  }
  get author(): Author {
    return this._author;
  }
  get categories(): Category[] {
    return this._categories;
  }

  public toJson(): Record<string, unknown> {
    return (
      {
        title: this._title,
        slug: this._slug,
        excerpt: this._excerpt,
        content: this._content,
        date: this._date,
        featuredImageUrl: this._featuredImageUrl,
        author: this._author,
        categories: this._categories,
      }
    )
  }
}

// export interface Post {
//   title: string;
//   excerpt: string;
//   content: string;
//   slug: string;
//   date: string;
//   featuredImage: {
//     node: {
//       sourceUrl: string;
//     };
//   };
//   author: {
//     node: {
//       name: string;
//       firstName: string;
//       lastName: string;
//       avatar: {
//         url: string;
//       };
//     };
//   };
//   categories: {
//     edges: Array<{
//       node: {
//         name: string;
//       };
//     }>;
//   };
// }

// export interface Category {
//   node: {
//     name: string;
//   };
// }
//
// export interface Page {
//   title: string;
//   excerpt: string;
//   content: string;
//   slug: string;
//   date: string;
//   featuredImage: {
//     node: {
//       sourceUrl: string;
//     };
//   };
//   author: {
//     node: {
//       name: string;
//       firstName: string;
//       lastName: string;
//       avatar: {
//         url: string;
//       };
//     };
//   };
//   categories: {
//     edges: Array<Category>;
//   };
// }
//
// export interface Node {
//   node: Post;
// }
//
// export interface PostsResponse {
//   data: {
//     posts: {
//       pageInfo: {
//         hasNextPage: boolean;
//         hasPreviousPage: boolean;
//         startCursor: string;
//         endCursor: string;
//       };
//       edges: Array<Node>;
//     };
//   };
// }
//
// export interface PostResponse {
//   data: {
//     post: Post;
//   };
// }
//
// export interface PageResponse {
//   pageBy: Page;
// }
