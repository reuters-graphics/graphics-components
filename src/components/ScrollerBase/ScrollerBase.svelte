<!-- This is a Svelte 5 version of [svelte-scroller](https://github.com/sveltejs/svelte-scroller) -->
<script module lang="ts">
  const handlers: Array<() => void> = [];

  interface ManagerParams {
    outer: Element;
    update: () => void;
  }

  let manager: {
    add: (params: ManagerParams) => void;
    remove: (params: ManagerParams) => void;
  };

  if (typeof window !== 'undefined') {
    const run_all = () => handlers.forEach((fn) => fn());

    window.addEventListener('scroll', run_all);
    window.addEventListener('resize', run_all);
  }

  if (typeof IntersectionObserver !== 'undefined') {
    const map = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const update = map.get(entry.target);
          const index = handlers.indexOf(update);

          if (entry.isIntersecting) {
            if (index === -1) handlers.push(update);
          } else {
            update();
            if (index !== -1) handlers.splice(index, 1);
          }
        });
      },
      {
        rootMargin: '400px 0px', // TODO why 400?
      }
    );

    manager = {
      add: ({ outer, update }) => {
        const { top, bottom } = outer.getBoundingClientRect();

        if (top < window.innerHeight && bottom > 0) handlers.push(update);

        map.set(outer, update);
        observer.observe(outer);
      },

      remove: ({ outer, update }) => {
        const index = handlers.indexOf(update);
        if (index !== -1) handlers.splice(index, 1);

        map.delete(outer);
        observer.unobserve(outer);
      },
    };
  } else {
    manager = {
      add: ({ update }) => {
        handlers.push(update);
      },

      remove: ({ update }) => {
        const index = handlers.indexOf(update);
        if (index !== -1) handlers.splice(index, 1);
      },
    };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { type Snippet } from 'svelte';

  interface Props {
    /** Config */
    /** The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height. **Value between 0 and 1.** */
    top?: number;
    /** The inverse of top — once the bottom of the foreground passes this point, the background becomes unfixed. **Value between 0 and 1.** */
    bottom?: number;
    /** Once a section crosses this point, it becomes 'active'. **Value between 0 and 1.** */
    threshold?: number;
    /** A CSS selector that describes the individual sections of your foreground. */
    query?: string;
    /** If `true`, the background will scroll such that the bottom edge reaches the bottom at the same time as the foreground. This effect can be unpleasant for people with high motion sensitivity, so use it advisedly. */
    parallax?: boolean;
    /** The background snippet. */
    backgroundSnippet: Snippet;
    /** The foreground snippet. */
    foregroundSnippet: Snippet;
    /** Bindings */
    /** The currently active section. **Bindable** */
    index?: number;
    /**  How far the section has scrolled past the threshold, as a value between 0 and 1. **Bindable**. */
    offset?: number;
    /** How far the foreground has travelled, where 0 is the top of the foreground crossing top, and 1 is the bottom crossing bottom. **Bindable**. */
    progress?: number;
    /** Number of sections */
    count?: number;
    /** Whether the foreground is visible */
    visible?: boolean;
  }

  let {
    // Bindings
    index = $bindable(0),
    count = $bindable(0),
    offset = $bindable(0),
    progress = $bindable(0),
    visible = $bindable(false),
    // Config
    top = 0,
    bottom = 1,
    threshold = 0.5,
    query = 'div.step-foreground-container',
    parallax = false,
    backgroundSnippet,
    foregroundSnippet,
  }: Props = $props();

  let outer: HTMLElement;
  let foreground: HTMLElement;
  let background: HTMLElement;
  let left;
  // Target compiler option to es6 or higher for NodeListOf<T> to be iterable.
  let sections: ReturnType<typeof document.querySelectorAll> | undefined =
    $state();
  let wh = $state(0);
  let fixed = $state(false);
  let offset_top = 0;
  let width = 1;

  let top_px = $derived(Math.round(top * wh));
  let bottom_px = $derived(Math.round(bottom * wh));
  let threshold_px = $derived(Math.round(threshold * wh));

  let style = $derived(`
		position: ${fixed ? 'fixed' : 'absolute'};
		transform: translate(0, ${offset_top}px);
	`);

  let widthStyle = $derived(fixed ? `width:${width}px;` : '');

  onMount(() => {
    sections = foreground.querySelectorAll(query);
    count = sections.length;

    update();

    const scroller = { outer, update };

    manager.add(scroller);
    return () => manager.remove(scroller);
  });

  function update() {
    if (!foreground) return;

    // re-measure outer container
    const bcr = outer.getBoundingClientRect();
    left = bcr.left;
    width = bcr.right - left;

    // determine fix state
    const fg = foreground.getBoundingClientRect();
    const bg = background.getBoundingClientRect();

    visible = fg.top < wh && fg.bottom > 0;

    const foreground_height = fg.bottom - fg.top;
    const background_height = bg.bottom - bg.top;

    const available_space = bottom_px - top_px;
    progress = (top_px - fg.top) / (foreground_height - available_space);

    if (progress <= 0) {
      offset_top = 0;
      fixed = false;
    } else if (progress >= 1) {
      offset_top =
        parallax ?
          foreground_height - background_height
        : foreground_height - available_space;
      fixed = false;
    } else {
      offset_top =
        parallax ?
          Math.round(top_px - progress * (background_height - available_space))
        : top_px;
      fixed = true;
    }

    for (let i = 0; i < sections!.length; i++) {
      const section = sections![i];
      const { top } = section.getBoundingClientRect();

      const next = sections![i + 1];
      const bottom = next ? next.getBoundingClientRect().top : fg.bottom;

      offset = (threshold_px - top) / (bottom - top);
      if (bottom >= threshold_px) {
        index = i;
        break;
      }
    }
  }
</script>

<svelte:window bind:innerHeight={wh} />

<svelte-scroller-outer bind:this={outer}>
  <svelte-scroller-background-container
    class="background-container"
    style="{style}{widthStyle}"
  >
    <svelte-scroller-background bind:this={background}>
      {@render backgroundSnippet()}
    </svelte-scroller-background>
  </svelte-scroller-background-container>

  <svelte-scroller-foreground bind:this={foreground}>
    {@render foregroundSnippet()}
  </svelte-scroller-foreground>
</svelte-scroller-outer>

<style lang="scss">
  svelte-scroller-outer {
    display: block;
    position: relative;
  }

  svelte-scroller-background {
    display: block;
    position: relative;
    width: 100%;
  }

  svelte-scroller-foreground {
    display: block;
    position: relative;
    z-index: 2;
  }

  svelte-scroller-foreground::after {
    content: ' ';
    display: block;
    clear: both;
  }

  svelte-scroller-background-container {
    display: block;
    position: absolute;
    width: 100%;
    max-width: 100%;
    pointer-events: none;
    z-index: 1;
    top: 0;

    /* in theory this helps prevent jumping */
    will-change: transform;
    /* -webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0); */
  }
</style>
