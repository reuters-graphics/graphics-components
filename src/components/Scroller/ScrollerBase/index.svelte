<script module lang="ts">
  const handlers = [];
  let manager;

  if (typeof window !== 'undefined') {
    const run_all = () => handlers.forEach((fn) => fn());

    window.addEventListener('scroll', run_all);
    window.addEventListener('resize', run_all);
  }

  if (typeof IntersectionObserver !== 'undefined') {
    const map = new Map();

    const observer = new IntersectionObserver(
      (entries, observer) => {
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

  let {
    // bindings
    index = $bindable(0),
    count = $bindable(0),
    offset = $bindable(0),
    progress = $bindable(0),
    visible = $bindable(false),
    // config
    top = 0,
    bottom = 1,
    threshold = 0.5,
    query = 'section',
    parallax = false,
    backgroundSnippet,
    foregroundSnippet,
  } = $props();

  let outer: HTMLElement;
  let foreground: HTMLElement;
  let background: HTMLElement;
  let left;
  let sections: NodeListOf<HTMLElement>;
  let wh = 0;
  let fixed = $state(false);
  let offset_top = 0;
  let width = 1;
  let height;
  let inverted;

  let top_px = Math.round(top * wh);
  let bottom_px = Math.round(bottom * wh);
  let threshold_px = Math.round(threshold * wh);

  let style = $derived(`
		position: ${fixed ? 'fixed' : 'absolute'};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${inverted ? 3 : 1};
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

  // $effect(() => {
  //   console.log('index', index);
  // });

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

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const { top } = section.getBoundingClientRect();

      const next = sections[i + 1];
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
    /* height: 100%; */

    /* in theory this helps prevent jumping */
    will-change: transform;
    /* -webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0); */
    background-color: yellow;
  }
</style>
