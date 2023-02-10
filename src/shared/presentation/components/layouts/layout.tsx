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

const defaultDescription =
  '名古屋のフルスタックエンジニア。SaaSやマッチングサービス、AR/VR等の開発を経て現在は独立して名古屋で開発やITコンサルしています。サービス開発の所感や、ハマった際の解決方法を記載しております。';
const defaultKeyWords = '名古屋, エンジニア, Ruby, Python, ITコンサル, IT顧問, システム開発';
const defaultImage = '/static/images/kyuri.png';

export const Layout: React.FC<Props> = ({ children, title, description, keywords, imageSrc }: Props) => {
  return (
    <div className='flex flex-col min-h-screen w-full p-5 mx-auto sm:max-w-4xl sm:py-12'>
      <CustomHead
        title={title ? `${title}|Masahiro's tech note` : "Masahiro's tech note"}
        description={description ?? defaultDescription}
        keywords={keywords ?? defaultKeyWords}
        imageSrc={imageSrc ?? defaultImage}
      />
      <div className='flex-grow'>
        <main>
          <Header />
          {children}
        </main>
      </div>
      <hr className='border-t border-white my-12' />
      <Footer />
    </div>
  );
};
