// Shamelessly stolen from https://github.com/sveltejs/svelte/issues/7583#issue-1260717165
let observer: ResizeObserver;
let callbacks: WeakMap<Element, (el: Element) => unknown>;

export default (element: HTMLElement, onResize: (el: Element) => unknown) => {
  if (!observer) {
    callbacks = new WeakMap();
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const onResize = callbacks.get(entry.target);
        if (onResize) onResize(entry.target);
      }
    });
  }

  callbacks.set(element, onResize);
  observer.observe(element);

  return {
    destroy: () => {
      callbacks.delete(element);
      observer.unobserve(element);
    },
  };
};
