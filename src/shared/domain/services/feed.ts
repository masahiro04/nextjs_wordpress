// import { Node, TPost } from '@/infrastructure/types';
import { Feed } from 'feed';
import fs from 'fs';
import { Post } from '../entities';

export const generateRSSFeed = (posts: Post[]): void => {
  // TODO(okubo): baseUrl入れてそこからroute取得
  const feed = new Feed({
    title: "Masahiro's tech note",
    description: "This is my blog's feed.",
    id: 'https://masahiro.me',
    link: 'https://masahiro.me',
    language: 'ja',
    image: '/static/images/kyuri.png',
    favicon: '/favicon.ico',
    copyright: `copyright¬© 2016-${new Date().getFullYear()} Masahiro Okubo`,
    // updated: new Date(), // optional, default = today
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss2: 'https://masahiro.me/rss.xml'
    }
  });

  // Add each article to the feed
  posts.forEach((post) => {
    const {
      slug,
      title,
      // excerpt,
      // content,
      date
    } = post;
    const url = `https://masahiro.me/posts/${slug}`;

    // TODO: contentとexcerptはparse不可な文字が入っているらしく、正常に生成できない。不要な箇所は削除や別の対応が必要
    feed.addItem({
      title: title.rendered,
      id: url,
      link: url,
      // description: excerpt,
      // content: '',
      date: new Date(date)
    });
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
};
