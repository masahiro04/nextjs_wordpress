import { useEffect } from 'react';

const AboutMeSection = (): JSX.Element => {
  useEffect(() => {
    const tweet = document.createElement('script');
    tweet.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweet.setAttribute('defer', 'true');
    document.head.appendChild(tweet);
  }, []);
  
  return (
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
          <img className="h-16" src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee"/>
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
