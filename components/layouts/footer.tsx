const Footer = (): JSX.Element => (
  <div className="bg-indigo-800 text-white text-center leading-8 w-full py-3">
    <div className="flex flex-col bg-indigo-800 font-bold">
      <div>copyright© 2016-{new Date().getFullYear()} Masahiro Okubo</div>
      <div className="flex flex-row mx-auto">
        <a href="https://twitter.com/masa_okubo" target="_blank">
          <i className="fab fa-twitter text-white fa-lg mx-2" />
        </a>
        <a href="https://github.com/masahiro04" target="_blank">
          <i className="fab fa-github text-white fa-lg mx-2" />
        </a>
        <a href="https://masahiro.me/rss.xml" target="_blank">
          <i className="fas fa-rss text-white fa-lg mx-2" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
