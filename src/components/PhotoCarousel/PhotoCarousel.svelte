<!-- @component `PhotoCarousel` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-photocarousel--docs) -->
<script lang="ts">
  // Utils
  import '@splidejs/svelte-splide/css/core';
  import { fly } from 'svelte/transition';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';

  // Icons
  import Fa from 'svelte-fa';
  import {
    faChevronLeft,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';

  // Components
  import Block from '../Block/Block.svelte';
  import PaddingReset from '../PaddingReset/PaddingReset.svelte';

  // Types
  import type { MoveEventDetail } from '@splidejs/svelte-splide/types';
  import type { Snippet } from 'svelte';
  import type { PhotoCarouselImage } from '../@types/global';

  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  type ObjectFit = 'cover' | 'contain';

  interface Props {
    /** Array of images. */
    images: PhotoCarouselImage[];
    /** Width of the component within the text well: normal, wide, wider, widest, fluid */
    width?: ContainerWidth;
    /**
     * Set a different width for captions within the text well, e.g. "normal," to keep captions inline with the rest of the text well. Can't ever be wider than `width`.
     */
    textWidth?: ContainerWidth;
    /** Add an ID to target with SCSS. */
    id?: string;
    /** Add a class to target with SCSS. */
    cls?: string;
    /** Max height of the carousel */
    maxHeight?: number;
    /** Default Image object-fit style: cover, contain */
    defaultImageObjectFit?: ObjectFit;
    /** Default image object-position style, e.g., `center center` or `50% 50%`. */
    defaultImageObjectPosition?: string;
    /** ARIA label for the carousel. */
    carouselAriaLabel?: string;
    /** Set height of the carousel as a ratio of its width as long as its below whatever you set in `maxHeight`. */
    heightRatio?: number;
    /** Number of images to preload ahead of the active image. */
    preloadImages?: number;
    /** Optional custom credit format as a snippet, which takes the argument `photo`. */
    credit?: Snippet<[PhotoCarouselImage]>;
    /** Optional custom caption format as a snippet, which takes the argument `photo`. */
    caption?: Snippet<[PhotoCarouselImage]>;
  }

  let {
    width = 'wider',
    textWidth = 'normal',
    id = '',
    cls = '',
    images,
    maxHeight = 660,
    defaultImageObjectFit = 'cover',
    defaultImageObjectPosition = 'center center',
    carouselAriaLabel = 'Photo gallery',
    heightRatio = 0.68,
    preloadImages = 1,
    credit,
    caption,
  }: Props = $props();

  let containerWidth: number | undefined = $state(undefined);
  let activeImageIndex = $state(0);

  // Derive carousel height based on container width
  let carouselHeight = $derived(
    containerWidth ?
      Math.min(containerWidth * heightRatio, maxHeight)
    : maxHeight
  );

  const handleActiveChange = (e?: CustomEvent<MoveEventDetail>) => {
    if (!e) return;
    activeImageIndex = e.detail.dest;
  };
</script>

<Block {width} {id} class="photo-carousel fmy-6 {cls}">
  <div class="carousel-container" bind:clientWidth={containerWidth}>
    <Splide
      hasTrack={false}
      options={{
        height: carouselHeight,
        fixedHeight: carouselHeight,
        lazyLoad: 'nearby',
        preloadPages: preloadImages,
      }}
      aria-label={carouselAriaLabel}
      on:move={handleActiveChange}
    >
      <div class="image-container">
        <SplideTrack>
          {#each images as image}
            <SplideSlide>
              <div class="photo-slide w-full h-full relative">
                <figure
                  class="fm-0 w-full relative"
                  style="height: {carouselHeight}px;"
                >
                  <img
                    class="w-full h-full fmy-0"
                    data-splide-lazy={image.src}
                    alt={image.altText}
                    style:object-fit={image.objectFit || defaultImageObjectFit}
                    style:object-position={image.objectPosition ||
                      defaultImageObjectPosition}
                  />
                  <!-- Render custom credit if credit snippet and string both exist -->
                  {#if credit && image.credit}
                    {@render credit(image)}

                    <!-- Otherwise, render with default credit style -->
                  {:else if image.credit}
                    <span
                      class="credit absolute fmb-1 fml-1 leading-tighter font-note text-xxs"
                      class:contain-fit={image.objectFit === 'contain' ||
                        defaultImageObjectFit === 'contain'}
                      >{image.credit}</span
                    >
                  {/if}
                </figure>
              </div>
            </SplideSlide>
          {/each}
        </SplideTrack>

        {#if images[activeImageIndex].caption}
          {@const activePhoto = images[activeImageIndex]}
          <PaddingReset containerIsFluid={width === 'fluid'}>
            <Block width={textWidth}>
              <!-- Render custom caption if caption snippet and string both exist -->
              {#if caption && activePhoto.caption}
                {#key activeImageIndex}
                  {@render caption(activePhoto)}
                {/key}

                <!-- Otherwise, render with default caption style -->
              {:else if activePhoto.caption}
                {#key activeImageIndex}
                  <p
                    class="caption body-caption text-center"
                    in:fly|local={{ x: 20, duration: 175 }}
                  >
                    {activePhoto.caption}
                  </p>
                {/key}
              {/if}
            </Block>
          </PaddingReset>
        {/if}

        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>

        <div class="splide__arrows fp-1">
          <button class="splide__arrow splide__arrow--prev">
            <Fa icon={faChevronLeft} fw />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <Fa icon={faChevronRight} fw />
          </button>
        </div>
      </div>
    </Splide>
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .carousel-container {
    .photo-slide {
      figure {
        span.credit {
          bottom: 0;
          left: 0;
          color: white;
          text-shadow:
            -1px -1px 0 #333,
            1px -1px 0 #333,
            -1px 1px 0 #333,
            1px 1px 0 #333;
          &.contain-fit {
            left: 50%;
            transform: translate(-50%, 0%);
          }
        }
      }
    }
    :global(.splide) {
      max-height: 100%;
    }
    :global(li) {
      padding: 0;
    }
    :global(.splide__arrows) {
      width: 275px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    :global(.splide__arrows button) {
      display: flex;
      font-size: 14px;
      height: 30px;
      width: 30px;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      @include mixins.text-secondary;
      opacity: 0.4;
    }
    :global(.splide__arrows button.splide__arrow--prev) {
      padding-right: 7px;
    }
    :global(.splide__arrows button.splide__arrow--next) {
      padding-left: 7px;
    }
    :global(.splide__arrows button:hover) {
      opacity: 1;
      border-color: mixins.$theme-colour-text-secondary;
      @include mixins.text-secondary;
    }
    :global(.splide__arrows button:disabled) {
      opacity: 0.4;
    }
    :global(.splide__arrows button:disabled:hover) {
      border-color: transparent;
    }
    :global(ul.splide__pagination) {
      width: 200px;
      padding: 0;
      text-align: center;
      margin: -26px auto 0;
      display: flex;
      flex-wrap: nowrap;
    }
    :global(ul.splide__pagination li) {
      flex-grow: 1;
      margin-top: -9px;
    }
    :global(ul.splide__pagination li button) {
      width: 100%;
      height: 7px;
      border-radius: 0;
      padding: 0;
      border: 1px solid mixins.$theme-colour-background;
      background: mixins.$theme-colour-text-secondary;
      opacity: 0.4;
    }
    :global(ul.splide__pagination li button.is-active) {
      opacity: 1;
    }
  }
</style>
