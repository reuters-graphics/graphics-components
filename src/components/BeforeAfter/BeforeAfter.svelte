<!-- @component `BeforeAfter` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-beforeafter--docs) -->
<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { throttle } from 'lodash-es';

  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';
  import type { ContainerWidth } from '../@types/global';
  import { random4 } from '../../utils/';

  interface Props {
    /** Width of the chart within the text well. Options: wide, wider, widest, fluid */
    width?: ContainerWidth;
    /** Height of the component */
    height?: number;
    /**
     * If set, makes the height a ratio of the component's width.
     */
    heightRatio?: number;
    /**
     * Before image source
     */
    beforeSrc: string;
    /**
     * Before image altText
     */
    beforeAlt: string;
    /**
     * After image source
     */
    afterSrc: string;
    /**
     * After image altText
     */
    afterAlt: string;
    /**
     * Class to target with SCSS.
     */
    class?: string;
    /** Drag handle colour */
    handleColour?: string;
    /** Drag handle opacity */
    handleInactiveOpacity?: number;
    /** Margin at the edge of the image to stop dragging */
    handleMargin?: number;
    /** Percentage of the component width the handle will travel ona key press */
    keyPressStep?: number;
    /** Initial offset of the handle, between 0 and 1. */
    offset?: number;
    /** ID to target with SCSS. */
    id?: string;
    /**
     * Optional snippet for a custom overlay for the before image.
     */
    beforeOverlay?: Snippet;
    /**
     * Optional snippet for a custom overlay for the after image.
     */
    afterOverlay?: Snippet;
    /**
     * Optional snippet for a custom caption.
     */
    caption?: Snippet;
  }

  let {
    width = 'normal',
    height = 600,
    heightRatio,
    beforeSrc,
    beforeAlt,
    afterSrc,
    afterAlt,
    class: cls = '',
    handleColour = 'white',
    handleInactiveOpacity = 0.9,
    handleMargin = 20,
    keyPressStep = 0.05,
    offset = 0.5,
    id = 'before-after-' + random4() + random4(),
    beforeOverlay,
    afterOverlay,
    caption,
  }: Props = $props();

  /** DOM nodes are undefined until the component is mounted — in other words, you should read it inside an effect or an event handler, but not during component initialisation.
   */
  let img: HTMLImageElement | undefined = $state(undefined);

  /** Defaults with an empty DOMRect with all values set to 0 */
  let imgOffset: DOMRect = $state(new DOMRect());
  let sliding = false;
  let figure: HTMLElement | undefined = $state(undefined);
  let beforeOverlayWidth = $state(0);
  let isFocused = false;
  let containerWidth: number = $state(0); // Defaults to 0

  let containerHeight = $derived(
    containerWidth && heightRatio ? containerWidth * heightRatio : height
  );

  let w = $derived(imgOffset.width);
  let x = $derived(w * offset);
  let figStyle = $derived(`width:100%;height:${containerHeight}px;`);
  const imgStyle = 'width:100%;height:100%;';
  let beforeOverlayClip = $derived(
    x < beforeOverlayWidth ? Math.abs(x - beforeOverlayWidth) : 0
  );

  /** Toggle `isFocused` */
  const onfocus = () => (isFocused = true);
  const onblur = () => (isFocused = false);

  /** Handle left or right arrows being pressed */
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isFocused) return;
    const { code, key } = e;
    const margin = handleMargin / w;
    if (code === 'ArrowRight' || key === 'ArrowRight') {
      offset = Math.min(1 - margin, offset + keyPressStep);
    } else if (code === 'ArrowLeft' || key === 'ArrowLeft') {
      offset = Math.max(0 + margin, offset - keyPressStep);
    }
  };

  /** Measure image and set image offset */
  const measureImage = () => {
    if (img && img.complete) imgOffset = img.getBoundingClientRect();
  };

  /** Reset image offset on resize */
  const resize = () => {
    measureImage();
  };

  /** This can probably get fixed?? */
  const measureLoadedImage = (e: Event) => {
    if (e.type === 'load') {
      imgOffset = (e.target as HTMLImageElement).getBoundingClientRect();
    }
  };

  /** Move the slider */
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

  /** Starts the slider */
  const start = (e: MouseEvent | TouchEvent) => {
    sliding = true;
    move(e);
  };

  /** Sets `sliding` to `false`*/
  const end = () => {
    sliding = false;
  };

  onMount(() => {
    // This is necessary b/c on:load doesn't reliably fire on the image...
    const interval = setInterval(() => {
      if (imgOffset) clearInterval(interval);
      if (img && img.complete && !imgOffset) measureImage();
    }, 50);
  });
</script>

<svelte:window
  ontouchmove={move}
  ontouchend={end}
  onmousemove={move}
  onmouseup={end}
  onresize={throttle(resize, 100)}
  onkeydown={handleKeyDown}
/>

<!-- Since we usually read these values from ArchieML, check that they exist -->
{#if beforeSrc && beforeAlt && afterSrc && afterAlt}
  <Block {width} {id} class="photo before-after fmy-6 {cls}">
    <div style="height: {containerHeight}px;" bind:clientWidth={containerWidth}>
      <button
        style={figStyle}
        class="before-after-container relative overflow-hidden my-0 mx-auto"
        ontouchstart={start}
        onmousedown={start}
        bind:this={figure}
        aria-labelledby={(caption && `${id}-caption`) || ''}
      >
        <img
          bind:this={img}
          src={afterSrc}
          alt={afterAlt}
          onload={measureLoadedImage}
          style={imgStyle}
          class="after absolute block m-0 max-w-full object-cover"
          aria-describedby={(beforeOverlay && `${id}-before`) || ''}
        />
        <img
          src={beforeSrc}
          alt={beforeAlt}
          style="clip: rect(0 {x}px {containerHeight}px 0);{imgStyle}"
          class="before absolute block m-0 max-w-full object-cover"
          aria-describedby={(afterOverlay && `${id}-after`) || ''}
        />
        {#if beforeOverlay}
          <div
            id="image-before-label"
            class="overlay-container before absolute"
            bind:clientWidth={beforeOverlayWidth}
            style="clip-path: inset(0 {beforeOverlayClip}px 0 0);"
          >
            <!-- Overlay for before image -->
            {@render beforeOverlay()}
          </div>
        {/if}
        {#if afterOverlay}
          <div id="image-after-label" class="overlay-container after absolute">
            <!-- Overlay for after image -->
            {@render afterOverlay()}
          </div>
        {/if}
        <div
          tabindex="0"
          role="slider"
          aria-valuenow={Math.round(offset * 100)}
          class="handle"
          style="left: calc({offset *
            100}% - 20px); --before-after-handle-colour: {handleColour}; --before-after-handle-inactive-opacity: {handleInactiveOpacity};"
          {onfocus}
          {onblur}
        >
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>
        </div>
      </button>
    </div>
    {#if caption}
      <PaddingReset containerIsFluid={width === 'fluid'}>
        <aside class="before-after-caption mx-auto" id={`${id}-caption`}>
          <!-- Caption for image credits -->
          {@render caption()}
        </aside>
      </PaddingReset>
    {/if}
  </Block>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  button.before-after-container {
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
      top: 0;
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
      @include mixins.body-caption;
    }
  }
</style>
