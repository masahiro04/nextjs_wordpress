import React from 'react';
import { Footer } from './footer';
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
    imageSrc = '/static/images/kyuri.png'
  } = props;

  {
    /* <div> */
  }
  {
    /*   <CustomHead */
  }
  {
    /*     title={title.length >= 1 ? `${title}|Masahiro's tech note` : "Masahiro's tech note"} */
  }
  {
    /*     description={description} */
  }
  {
    /*     keywords={keywords} */
  }
  {
    /*     imageSrc={imageSrc} */
  }
  {
    /*   /> */
  }
  {
    /*   <Header /> */
  }
  {
    /*   <Breadcrumbs title={title} /> */
  }
  {
    /*   {children} */
  }
  {
    /*   <Footer /> */
  }
  {
    /* </div> */
  }
  return (
    <div className='flex flex-col min-h-screen w-full p-5 mx-auto sm:max-w-4xl sm:py-12'>
      <div className='flex-grow'>
        <main>
          <Header />
        </main>
      </div>
      <hr className='border-t border-white my-12' />
      {children}
      <Footer />
    </div>
  );
};
