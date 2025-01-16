<!-- @migration-task Error while migrating Svelte code: Cannot set properties of undefined (setting 'next') -->
<!-- @component `BeforeAfter` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-beforeafter--docs) -->
<script lang="ts">
  import { throttle } from 'lodash-es';
  import { onMount } from 'svelte';
  import Block from '../Block/Block.svelte';
  import type { ContainerWidth } from '../@types/global';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  /** Width of the chart within the text well. */
  export let width: ContainerWidth = 'normal'; // options: wide, wider, widest, fluid
  /** Height of the component */
  export let height = 600;

  /**
   * If set, makes the height a ratio of the component's width.
   * @type {number}
   */
  export let heightRatio: number | null = null;

  /**
   * Before image src
   * @required
   */
  export let beforeSrc: string | null = null;
  /**
   * Before image altText
   * @required
   */
  export let beforeAlt: string | null = null;
  /**
   * After image src
   * @required
   */
  export let afterSrc: string | null = null;
  /**
   * After image altText
   * @required
   */
  export let afterAlt: string | null = null;

  /**
   * Set a class to target with SCSS.
   * @type {string}
   */
  let cls: string = '';
  export { cls as class };

  /** Drag handle colour */
  export let handleColour = 'white';
  /** Drag handle opacity */
  export let handleInactiveOpacity = 0.9;
  /** Margin at the edge of the image to stop dragging */
  export let handleMargin = 20;
  /** Percentage of the component width the handle will travel ona key press */
  export let keyPressStep = 0.05;

  /** Initial offset of the handle, between 0 and 1. */
  export let offset = 0.5;

  const random4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  /**
   * Add an ID to target with SCSS.
   * @type {string}
   */
  export let id: string = 'before-after-' + random4() + random4();

  let img: HTMLImageElement;
  let imgOffset: DOMRect | null = null;
  let sliding = false;
  let figure: HTMLElement;
  let beforeOverlayWidth = 0;
  let isFocused = false;
  let containerWidth: number;

  $: containerHeight =
    containerWidth && heightRatio ? containerWidth * heightRatio : height;

  $: w = (imgOffset && imgOffset.width) || 0;
  $: x = w * offset;
  $: figStyle = `width:100%;height:${containerHeight}px;`;
  $: imgStyle = 'width:100%;height:100%;';
  $: beforeOverlayClip =
    x < beforeOverlayWidth ? Math.abs(x - beforeOverlayWidth) : 0;

  const onFocus = () => (isFocused = true);
  const onBlur = () => (isFocused = false);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isFocused) return;
    const { keyCode } = e;
    const margin = handleMargin / w;
    if (keyCode === 39) {
      offset = Math.min(1 - margin, offset + keyPressStep);
    } else if (keyCode === 37) {
      offset = Math.max(0 + margin, offset - keyPressStep);
    }
  };

  const measureImage = () => {
    if (img && img.complete) imgOffset = img.getBoundingClientRect();
  };

  const resize = () => {
    measureImage();
  };

  const measureLoadedImage = (e: Event) => {
    if (e.type === 'load') {
      imgOffset = (e.target as HTMLImageElement).getBoundingClientRect();
    }
  };

  const move = (e: MouseEvent | TouchEvent) => {
    if (sliding && imgOffset) {
      const el =
        e instanceof TouchEvent && e.touches ? e.touches[0] : (e as MouseEvent);
      const figureOffset =
        figure ?
          parseInt(window.getComputedStyle(figure).marginLeft.slice(0, -2))
        : 0;
      let x = el.pageX - figureOffset - imgOffset.left;
      x =
        x < handleMargin ? handleMargin
        : x > w - handleMargin ? w - handleMargin
        : x;
      offset = x / w;
    }
  };
  const start = (e: MouseEvent | TouchEvent) => {
    sliding = true;
    move(e);
  };
  const end = () => {
    sliding = false;
  };

  if (!(beforeSrc && beforeAlt && afterSrc && afterAlt)) {
    console.warn('Missing required src or alt props for BeforeAfter component');
  }

  onMount(() => {
    // This is necessary b/c on:load doesn't reliably fire on the image...
    const interval = setInterval(() => {
      if (imgOffset) clearInterval(interval);
      if (img && img.complete && !imgOffset) measureImage();
    }, 50);
  });
</script>

<svelte:window
  on:touchmove="{move}"
  on:touchend="{end}"
  on:mousemove="{move}"
  on:mouseup="{end}"
  on:resize="{throttle(resize, 100)}"
  on:keydown="{handleKeyDown}"
/>

{#if beforeSrc && beforeAlt && afterSrc && afterAlt}
  <Block {width} {id} class="photo before-after fmy-6 {cls}">
    <div
      style="height: {containerHeight}px;"
      bind:clientWidth="{containerWidth}"
    >
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <figure
        style="{figStyle}"
        class="before-after-container relative overflow-hidden my-0 mx-auto"
        on:touchstart="{start}"
        on:mousedown="{start}"
        bind:this="{figure}"
        aria-labelledby="{($$slots.caption && `${id}-caption`) || undefined}"
      >
        <img
          bind:this="{img}"
          src="{afterSrc}"
          alt="{afterAlt}"
          on:load="{measureLoadedImage}"
          on:mousedown|preventDefault
          style="{imgStyle}"
          class="after absolute block m-0 max-w-full object-cover"
          aria-describedby="{($$slots.beforeOverlay && `${id}-before`) ||
            undefined}"
        />

        <img
          src="{beforeSrc}"
          alt="{beforeAlt}"
          on:mousedown|preventDefault
          style="clip: rect(0 {x}px {containerHeight}px 0);{imgStyle}"
          class="before absolute block m-0 max-w-full object-cover"
          aria-describedby="{($$slots.afterOverlay && `${id}-after`) ||
            undefined}"
        />
        {#if $$slots.beforeOverlay}
          <div
            id="image-before-label"
            class="overlay-container before absolute"
            bind:clientWidth="{beforeOverlayWidth}"
            style="clip-path: inset(0 {beforeOverlayClip}px 0 0);"
          >
            <!-- Overlay for before image -->
            <slot
              name="beforeOverlay"
              description="{`${id}-before-description`}"
            />
          </div>
        {/if}
        {#if $$slots.afterOverlay}
          <div id="image-after-label" class="overlay-container after absolute">
            <!-- Overlay for after image -->
            <slot
              name="afterOverlay"
              description="{`${id}-after-description`}"
            />
          </div>
        {/if}
        <div
          tabindex="0"
          role="slider"
          aria-valuenow="{Math.round(offset * 100)}"
          class="handle"
          style="left: calc({offset *
            100}% - 20px); --before-after-handle-colour: {handleColour}; --before-after-handle-inactive-opacity: {handleInactiveOpacity};"
          on:focus="{onFocus}"
          on:blur="{onBlur}"
        >
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </figure>
    </div>
    {#if $$slots.caption}
      <PaddingReset containerIsFluid="{width === 'fluid'}">
        <aside class="before-after-caption mx-auto" id="{`${id}-caption`}">
          <!-- Caption for image credits -->
          <slot name="caption" />
        </aside>
      </PaddingReset>
    {/if}
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as *;

  figure.before-after-container {
    box-sizing: content-box;

    img {
      top: 0;
      left: 0;
      z-index: 20;
      &.after {
        z-index: 21;
      }
      &.before {
        z-index: 22;
      }
      user-select: none;
    }
    .overlay-container {
      position: absolute;
      :global(:first-child) {
        margin-top: 0;
      }
      :global(:last-child) {
        margin-bottom: 0;
      }
      &.before {
        left: 0;
        z-index: 23;
      }
      &.after {
        right: 0;
        z-index: 21;
      }
    }
  }

  .handle {
    z-index: 30;
    width: 40px;
    height: 40px;
    cursor: move;
    background: none;
    user-select: none;
    position: absolute;
    border-radius: 50px;
    top: calc(50% - 20px);
    border: 4px solid var(--before-after-handle-colour);
    opacity: var(--before-after-handle-inactive-opacity, 0.6);
    box-shadow: 1px 1px 3px #333;
    &:hover,
    &:active,
    &:focus {
      opacity: 1;
    }

    &:before,
    &:after {
      content: '';
      box-shadow: 0 0 3px #333;
      height: 9999px;
      position: absolute;
      left: calc(50% - 2px);
      border: 2px solid var(--before-after-handle-colour);
    }
    &:before {
      top: 40px;
    }
    &:after {
      bottom: 40px;
    }
    .arrow-right,
    .arrow-left {
      width: 0;
      height: 0;
      user-select: none;
      position: relative;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    .arrow-right {
      left: 19px;
      bottom: 14px;
      border-left: 10px solid var(--before-after-handle-colour);
    }
    .arrow-left {
      left: 3px;
      top: 6px;
      border-right: 10px solid var(--before-after-handle-colour);
    }
  }

  aside.before-after-caption {
    :global(p) {
      @include body-caption;
    }
  }
</style>
