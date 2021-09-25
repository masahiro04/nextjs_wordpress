import Image from 'next/image';

const AboutMeSection = (): JSX.Element => (
  <div className="">
    <div className="my-2">
      <a
        href="https://twitter.com/masa_okubo?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-show-count="false"
        data-size="large"
      >
        Follow @masa_okubo
      </a>
    </div>
    <div className="my-2">
      <a href="https://www.buymeacoffee.com/masaokubo" target="_blank">
        <img className="h-16" src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" />
      </a>
    </div>
  </div>
);

export default AboutMeSection;
