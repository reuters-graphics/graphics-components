<script lang="ts">
  import Demo from './graphic/ai2svelte/demo.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';

  import HorizontalScroller from '../HorizontalScroller.svelte';
  import { map } from '../utils/index';
  import { sineInOut } from 'svelte/easing';

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';

  let progress: number = $state(0);
  let pngLayer: HTMLElement | null;
  let captions: HTMLElement[] | null;
  let threshold = 0.8;
  let screenWidth: number = $state(0);

  function handleScroll() {
    if (pngLayer) {
      pngLayer.style.transform = `scale(1.5) translateX(${map(progress, 0, 1, -15, 85)}%)`;
    }

    if (captions?.length) {
      captions.forEach((caption) => {
        let captionWidth = caption.getBoundingClientRect().width;
        let captionMidpoint =
          caption.getBoundingClientRect().left + captionWidth / 2;

        if (
          captionMidpoint < screenWidth * threshold &&
          caption.style.opacity !== '1'
        ) {
          caption.style.opacity = '1';
        } else if (
          captionMidpoint > screenWidth * threshold &&
          caption.style.opacity !== '0'
        ) {
          caption.style.opacity = '0';
        }
      });
    }
  }

  function onArtboardChange(artboard: HTMLElement) {
    pngLayer = artboard.querySelector('.g-png-layer-overlay');
    captions = Array.from(artboard.querySelectorAll('.g-captions'));

    if (pngLayer) {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScroll, {
        passive: true,
      });

      // to translate overlay layer on initial load
      handleScroll();
    }
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<BodyText text={foobarText} />

<Block width="fluid">
  <HorizontalScroller
    height="800lvh"
    bind:progress
    easing={sineInOut}
    showDebugInfo
  >
    <Demo
      {onArtboardChange}
      taggedText={{
        htext: {
          captions: {
            caption1:
              '<div class="scroller-caption"><strong>Caption 1!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
            caption2:
              '<div class="scroller-caption"><strong>Caption 2!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
            caption3:
              '<div class="scroller-caption"><strong>Caption 3!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
            caption4:
              '<div class="scroller-caption"><strong>Caption 4!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
          },
        },
      }}
    />
  </HorizontalScroller>
</Block>

<BodyText text={foobarText} />

<style lang="scss">
  :global(.scroller-caption) {
    padding: 1rem;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    color: white;
    filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.2));
  }
</style>
