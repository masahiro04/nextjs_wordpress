import { fetchPostSlugsUseCase } from '@/index';
import { GetServerSideProps, NextPage } from 'next';

const generateSiteMap = (slugs: string[]) => {
  const domain = process.env.DOMAIN;
  if (!domain) {
    throw new Error('DOMAIN is not set');
  }
  const basePath = ['', 'about', 'project'];
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${basePath
        .map(
          (path) =>
            `<url>
              <loc>https://${domain}/${path}</loc>
            </url>`
        )
        .join('')}
     ${slugs
       .map(
         (slug) =>
           `<url>
              <loc>${`https://${domain}/posts/${slug}`}</loc>
            </url>`
       )
       .join('')}
   </urlset>
 `;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const slugs = await fetchPostSlugsUseCase();
  const sitemap = generateSiteMap(slugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
};

const SiteMap: NextPage = () => null;

export default SiteMap;
