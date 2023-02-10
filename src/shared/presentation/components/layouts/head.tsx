import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords: string;
  imageSrc: string;
};

export const CustomHead: React.FC<Props> = ({ title, description, keywords, imageSrc }: Props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>;
      <meta name='description' content={description} />;
      <meta name='keywords' content={keywords} />;
      <meta name='twitter:title' content={title} />;
      <meta name='twitter:description' content={description} />;
      <meta name='twitter:card' content='summary_large_image' />;
      <meta name='twitter:image' content={imageSrc} />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src='https://www.googletagmanager.com/gtag/js?id=UA-63213825-1' />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-63213825-1');
        `
        }}
      ></script>
      <link rel='shortcut icon' href='../static/images/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' media='print' />
      <link
        href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@500;900&family=Yantramanav:wght@700&family=Roboto:wght@700&display=swap'
        rel='stylesheet'
        media='print'
      />
      <link href='https://use.fontawesome.com/releases/v5.6.1/css/all.css' rel='stylesheet' media='print' />
    </Head>
  );
};
