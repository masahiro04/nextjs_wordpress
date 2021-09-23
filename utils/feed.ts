import { Feed } from 'feed';
import fs from 'fs'

export const generateRSSFeed = (edges: any[]) => {
  const baseUrl = process.env.HOST_URL;
  const author = {
    name: 'Masahiro Okubo',
    email: '',
    link: 'https://twitter.com/masa_okubo',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Masahiro's tech note",
    description: "This is my blog's feed.",
    id: baseUrl,
    link: baseUrl,
    language: "ja", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${baseUrl}/static/images/kyuri.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `copyright¬© 2016-${new Date().getFullYear()} Masahiro Okubo`,
    // updated: new Date(), // optional, default = today
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author
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
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync('public/rss.xml', feed.rss2());
};
