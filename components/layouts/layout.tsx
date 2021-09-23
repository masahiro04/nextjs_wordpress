import Header from './header';
import Footer from './footer';
import CustomHead from './head';
import Breadcrumbs from './bread-crumbs';

const Layout = ({
  children,
  title = '',
  description = '名古屋のフルスタックエンジニア。SaaSやマッチングサービス、AR/VR等の開発を経て現在は独立して名古屋で開発やITコンサルしています。サービス開発の所感や、ハマった際の解決方法を記載しております。',
  keywords = '名古屋, エンジニア, Ruby, Python, ITコンサル, IT顧問, システム開発',
  imageSrc = `${process.env.HOST_URL}/static/images/kyuri.png`,
  word = '',
  setWord,
}): JSX.Element => (
  <div>
    <CustomHead
      title={ title.length >= 1 ? `${title}|Masahiro's tech note` : 'Masahiro\'s tech note' }
      description={ description }
      keywords={ keywords }
      imageSrc={ imageSrc }
    />
    <Header word={word} setWord={setWord}/>
    <Breadcrumbs title={title} />
    { children }
    <Footer />
  </div>
);

export default Layout;
