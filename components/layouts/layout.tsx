import React from 'react';
import { Breadcrumbs } from './breadCrumbs';
import { Footer } from './footer';
import { CustomHead } from './head';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  imageSrc?: string;
};

export const Layout: React.FC<Props> = (props) => {
  const {
    children,
    title = '',
    description = '名古屋のフルスタックエンジニア。SaaSやマッチングサービス、AR/VR等の開発を経て現在は独立して名古屋で開発やITコンサルしています。サービス開発の所感や、ハマった際の解決方法を記載しております。',
    keywords = '名古屋, エンジニア, Ruby, Python, ITコンサル, IT顧問, システム開発',
    imageSrc = `${process.env.HOST_URL}/static/images/kyuri.png`,
  } = props;
  return (
    <div>
      <CustomHead
        title={title.length >= 1 ? `${title}|Masahiro's tech note` : "Masahiro's tech note"}
        description={description}
        keywords={keywords}
        imageSrc={imageSrc}
      />
      <Header />
      <Breadcrumbs title={title} />
      {children}
      <Footer />
    </div>
  );
};
