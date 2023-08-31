<!-- @component `PhotoCarousel` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-PhotoCarousel--default) -->
<script lang="ts">
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'wider';

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  let cls: string = '';
  export { cls as class };

  interface Image {
    /**
     * Image src
     * @required
     */
    src: string;
    /**
     * Image alt-text
     * @required
     */
    altText: string;
    /** Optional caption */
    caption?: string;
    /** Optional credit */
    credit?: string;
    /** Optional object-fit rule */
    objectFit?: string;
    /** Optional object-position rule */
    objectPosition?: string;
  }

  /**
   * Array of photos.
   * @required
   */
  export let photos: Image[] = [];

  /**
   * Max height of the carousel
   */
  export let maxHeight: number = 660;

  type ObjectFit = 'cover' | 'contain';

  /**
   * Default Image object-fit style, either `cover` or `contain`.
   */
  export let defaultImageObjectFit: ObjectFit = 'cover';

  /**
   * Default image object-position style, e.g., `center center` or `50% 50%`.
   */
  export let defaultImageObjectPosition: string = 'center center';

  /**
   * ARIA label for the carousel.
   * @required
   */
  export let carouselAriaLabel: string = 'Photo gallery';

  /**
   * Set height of the carousel as a ratio of its width
   * as long as its below whatever you set in `maxHeight`.
   */
  export let heightRatio: number = 0.68;

  /**
   * Number of images to preload ahead of the active image.
   */
  export let preloadImages: number = 1;

  import Block from '../Block/Block.svelte';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faChevronLeft,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import { fly } from 'svelte/transition';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  let containerWidth;

  let activeImageIndex = 0;

  $: carouselHeight = containerWidth
    ? Math.min(containerWidth * heightRatio, maxHeight)
    : maxHeight;

  const handleActiveChange = (e) => {
    activeImageIndex = e.detail.dest;
  };
</script>

<Block width="{width}" id="{id}" class="photo-carousel fmy-5 {cls}">
  <div class="carousel-container" bind:clientWidth="{containerWidth}">
    <Splide
      hasTrack="{false}"
      options="{{
        height: carouselHeight,
        fixedHeight: carouselHeight,
        lazyLoad: 'nearby',
        preloadPages: preloadImages,
      }}"
      aria-label="{carouselAriaLabel}"
      on:move="{handleActiveChange}"
    >
      <div class="image-container">
        <SplideTrack>
          {#each photos as photo, i}
            <SplideSlide>
              <div class="photo-slide w-full h-full relative">
                <figure
                  class="fm-0 w-full relative"
                  style="height: {carouselHeight}px;"
                >
                  <img
                    class="w-full h-full fmy-0"
                    data-splide-lazy="{photo.src}"
                    alt="{photo.altText}"
                    style:object-fit="{photo.objectFit ||
                      defaultImageObjectFit}"
                    style:object-position="{photo.objectPosition ||
                      defaultImageObjectPosition}"
                  />
                  {#if $$slots.credit}
                    <slot name="credit" credit="{photo.credit}" />
                  {:else}
                    <span
                      class="credit absolute fmb-1 fml-1 leading-tighter font-note text-xxs"
                      class:contain-fit="{photo.objectFit === 'contain' ||
                        defaultImageObjectFit === 'contain'}"
                      >{photo.credit}</span
                    >
                  {/if}
                </figure>
              </div>
            </SplideSlide>
          {/each}
        </SplideTrack>

        {#if photos[activeImageIndex].caption}
          <PaddingReset containerIsFluid="{width === 'fluid'}">
            {#if $$slots.caption}
              <slot
                name="caption"
                caption="{photos[activeImageIndex].caption}"
              />
            {:else}
              {#key activeImageIndex}
                <p
                  class="caption body-caption fmt-2"
                  in:fly|local="{{ x: 20, duration: 175 }}"
                >
                  {photos[activeImageIndex].caption}
                </p>
              {/key}
            {/if}
          </PaddingReset>
        {/if}

        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>

        <div class="splide__arrows fp-1">
          <button class="splide__arrow splide__arrow--prev">
            <Fa icon="{faChevronLeft}" fw />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <Fa icon="{faChevronRight}" fw />
          </button>
        </div>
      </div>
    </Splide>
  </div>
</Block>

<style lang="scss">
  @import '../../scss/mixins';

  .carousel-container {
    .photo-slide {
      figure {
        span.credit {
          bottom: 0;
          left: 0;
          color: white;
          text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333,
            1px 1px 0 #333;
          &.contain-fit {
            left: 50%;
            transform: translate(-50%, 0%);
          }
        }
      }
    }
    :global {
      .splide {
        max-height: 100%;
      }

      .splide__arrows {
        width: 275px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        button {
          display: flex;
          font-size: 14px;
          height: 30px;
          width: 30px;
          padding: 0;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          border-radius: 50%;
          background-color: transparent;
          cursor: pointer;
          @include text-secondary;
          opacity: 0.4;
          &:hover {
            opacity: 1;
            border-color: $theme-colour-text-secondary;
            @include text-secondary;
          }
          &:disabled {
            opacity: 0.4;
            &:hover {
              border-color: transparent;
            }
          }
        }
      }
      ul.splide__pagination {
        width: 200px;
        padding: 0;
        text-align: center;
        margin: -26px auto 0;
        display: flex;
        flex-wrap: nowrap;
        li {
          flex-grow: 1;
          margin-top: -9px;
          button {
            width: 100%;
            height: 7px;
            border-radius: 0;
            padding: 0;
            border: 1px solid $theme-colour-background;
            background: $theme-colour-text-secondary;
            opacity: 0.4;
            &.is-active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
