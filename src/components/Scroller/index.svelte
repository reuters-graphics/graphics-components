<script>
  /* This component wraps a scroller for ai2svelte graphics. */
  import Scroller from '@sveltejs/svelte-scroller';
  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
  import Embedded from './Embedded/index.svelte';

  export let id = '';
  export let steps = [];
  // normal, wide, wider, widest or fluid
  export let backgroundSize = 'fluid';
  // middle, left, right, left opposite or right opposite
  export let foregroundPosition = 'middle';
  export let stackBackground = true;
  export let preload = 1;
  export let embedded = false;
  export let embeddedLayout = 'fb';

  // Passed to svelte-scroller
  export let threshold = 0.5;
  export let top = 0;
  export let bottom = 1;
  export let parallax = false;

  let index = 0;
  let offset, progress;
</script>

{#if !embedded}
  <section class="scroller-container" id="{id}">
    <Scroller
      bind:index
      bind:offset
      bind:progress
      threshold="{threshold}"
      top="{top}"
      bottom="{bottom}"
      parallax="{parallax}"
      query="section.step-foreground-container"
    >
      <div
        slot="background"
        class="background"
        class:right="{foregroundPosition === 'left opposite'}"
        class:left="{foregroundPosition === 'right opposite'}"
      >
        <div class="scroller-graphic-well">
          <section
            class="background-container graphic {backgroundSize}"
            step="{index + 1}"
          >
            <Background
              index="{index}"
              steps="{steps}"
              preload="{preload}"
              stackBackground="{stackBackground}"
            />
          </section>
        </div>
      </div>

      <div slot="foreground" class="foreground {foregroundPosition}">
        <Foreground steps="{steps}" />
      </div>
    </Scroller>
  </section>
{:else}
  <section class="scroller-container embedded" id="{id}">
    <Embedded
      steps="{steps}"
      embeddedLayout="{embeddedLayout}"
      backgroundSize="{backgroundSize}"
    />
  </section>
{/if}

<style lang="scss">
  .scroller-container {
    // margin-top: 5rem;
    margin-bottom: 5rem;
    // width: 100vw;
    width: calc(100% + 30px);
    margin-left: -15px;
    max-width: initial;
    &.embedded {
      padding: 0 15px;
    }
  }

  div.background {
    min-height: 100vh;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: center;

    &.left {
      width: 50%;
      float: left;
      @media (max-width: 1200px) {
        justify-content: center;
        width: 100%;
        float: initial;
      }
    }
    &.right {
      width: 50%;
      float: right;
      @media (max-width: 1200px) {
        justify-content: center;
        width: 100%;
        float: initial;
      }
    }

    div.scroller-graphic-well {
      padding: 0 15px;
      width: 100%;
      section.graphic.background-container {
        margin-top: 0;
        margin-bottom: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.fluid {
          margin: 0 0 0 -15px;
        }
      }
    }
  }

  div.foreground {
    width: 100%;

    &.right {
      width: 50%;
      float: right;
      @media (max-width: 1200px) {
        width: 100%;
        float: initial;
      }
    }

    &.left {
      width: 50%;
      float: left;
      @media (max-width: 1200px) {
        width: 100%;
        float: initial;
      }
    }
  }
</style>
