Add a cover video and position the title with ease.

```svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
</script>

<HeroHeadline
  class="custom-hero"
  hed="The conflict in Ethiopia"
  hedSize="bigger"
  hedWidth="wide"
  authors="{['Aditi Bhandari ', 'David Lewis']}"
  publishTime="{new Date('2020-12-18').toISOString()}"
>
  <div slot="background">
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    >
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        autoplay
        muted
        playsinline
        loop
        preload="true"
        width="100%"
        poster="video-poster.png"
        src="{assets}/videos/intro.mp4"
      >
      </video>
    </GraphicBlock>
  </div>
</HeroHeadline>

<style lang="scss">
  .hero-wrapper {
    --heroHeight: calc(100svh - 60px);
    .custom-hero.headline {
      header {
        // Adjust vertical position as offset from default center
        top: calc(50svh - 250px);
      }

      h1 {
        color: #ffd430;
        text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
      }
    }
  }
</style>
```
