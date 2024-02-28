export const loadScript = (src: string, onload?: () => void) => {
  const script = document.createElement('script');
  script.addEventListener('load', onload);
  script.src = src;
  document.head.append(script);
};
