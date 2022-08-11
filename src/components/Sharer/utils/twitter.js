import { getHref, getTitle } from './meta';

const handleTweet = () => {
  const windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes';
  const width = 550;
  const height = 420;
  const winHeight = screen.height;
  const winWidth = screen.width;

  const left = Math.round(winWidth / 2 - width / 2);
  const top = winHeight > height ? Math.round(winHeight / 2 - height / 2) : 0;

  const target = `https://twitter.com/intent/tweet?text=${getTitle()}&via=Reuters&url=${getHref()}`;

  window.open(
    target,
    'intent',
    `${windowOptions},width=${width},height=${height},left=${left},top=${top}`
  );
};

export default handleTweet;
