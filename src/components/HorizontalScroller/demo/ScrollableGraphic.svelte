<script lang="ts">
  import Demo from './graphic/ai2svelte/demo.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import HorizontalScroller from '../HorizontalScroller.svelte';
  import { map } from '../utils/index';
  import { sineInOut } from 'svelte/easing';

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';

  let scrollProgress: number = $state(0);
  let pngLayer: HTMLElement | null;
  let captions: HTMLElement[] | null;
  let threshold = 0.8;
  let screenWidth: number = $state(0);

  function handleScroll() {
    if (pngLayer) {
      pngLayer.style.transform = `translateX(${map(scrollProgress, 0, 1, -400, 400)}px)`;
    }

    if (captions?.length) {
      captions.forEach((caption) => {
        let captionWidth = caption.getBoundingClientRect().width;
        let captionMidpoint =
          caption.getBoundingClientRect().left + captionWidth / 2;

        if (captionMidpoint < screenWidth * threshold) {
          caption.style.opacity = '1';
        } else {
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
    }
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<BodyText text={foobarText} />

<HorizontalScroller
  height="800lvh"
  direction="right"
  bind:scrollProgress
  easing={sineInOut}
  showDebugInfo
>
  <Demo
    {onArtboardChange}
    debugTaggedText
    taggedText={{
      htext: {
        captions: {
          caption1:
            '<div class="scroller-caption"><strong>Destruction!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
          caption2:
            '<div class="scroller-caption"><strong>Destruction!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
          caption3:
            '<div class="scroller-caption"><strong>Destruction!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
          caption4:
            '<div class="scroller-caption"><strong>Destruction!</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
        },
      },
    }}
  />
</HorizontalScroller>

<BodyText text={foobarText} />

<style lang="scss">
  :global(.scroller-caption) {
    padding: 1rem;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.2));
  }
</style>
