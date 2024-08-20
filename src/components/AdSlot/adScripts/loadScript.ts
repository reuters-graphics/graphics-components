interface attributesInterface {
  onload?: () => void;
  async?: boolean;
}

export const loadScript = (src: string, attributes?: attributesInterface) => {
  const { onload, async = true } = attributes || {};

  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) return;

  const script = document.createElement('script');
  script.addEventListener('load', onload);
  script.async = async;
  script.src = src;
  document.head.append(script);
};
