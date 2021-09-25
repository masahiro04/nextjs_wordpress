import fs from 'fs'
import { Feed } from 'feed';

export const generateRSSFeed = (edges: any[]) => {
  const baseUrl = process.env.HOST_URL;

  // Construct a new Feed object
  const feed = new Feed({
    title: "Masahiro's tech note",
    description: "This is my blog's feed.",
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/static/images/kyuri.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `copyright¬© 2016-${new Date().getFullYear()} Masahiro Okubo`,
    // updated: new Date(), // optional, default = today
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
  });

  // Add each article to the feed
  edges.forEach(({ node }) => {
    const {
      slug,
      title,
      // excerpt,
      // content,
      date,
    } = node;
    const url = `${baseUrl}/posts/${slug}`;

    // TODO: contentとexcerptはparse不可な文字が入っているらしく、正常に生成できない。不要な箇所は削除や別の対応が必要
    feed.addItem({
      title,
      id: url,
      link: url,
      // description: excerpt,
      // content: '',
      date: new Date(date),
    });
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
};
