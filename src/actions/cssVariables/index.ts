// Shamelessly stolen from: https://github.com/kaisermann/svelte-css-vars
export default (node: HTMLElement, props: Record<string, string>) => {
  Object.entries(props).forEach(([key, value]) => {
    node.style.setProperty(`--${key}`, value);
  });

  return {
    update(newProps: Record<string, string>) {
      Object.entries(newProps).forEach(([key, value]) => {
        node.style.setProperty(`--${key}`, value);
        delete props[key];
      });

      Object.keys(props).forEach((name) => {
        node.style.removeProperty(`--${name}`);
      });
      props = newProps;
    },
  };
};
