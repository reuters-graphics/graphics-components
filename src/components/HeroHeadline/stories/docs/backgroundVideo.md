Add a cover video and position the title with ease.

```svelte
<script>
  import { HeroHeadline, Video } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';

  export let embedded = false;
</script>

<HeroHeadline
  embedded="{embedded}"
  class="custom-hero"
  hed="The conflict in Ethiopia"
  hedSize="bigger"
  hedWidth="wide"
  authors="{['Aditi Bhandari ', 'David Lewis']}"
  publishTime="{new Date('2020-12-18').toISOString()}"
>
  <div slot="background">
    <Video
      width="widest"
      class="my-0"
      showControls="{false}"
      preloadVideo="auto"
      playVideoWhenInView="{false}"
      src="{assets}/videos/intro.mp4"
      poster="{assets}/images/video-poster-intro.jpg"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    />
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
