<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDesktop, faLink } from '@fortawesome/free-solid-svg-icons';
  import { onMount, afterUpdate } from 'svelte';
  import pym from 'pym.js';
  import urljoin from 'proper-url-join';
  import Resizer from './Resizer/index.svelte';
  import { width } from './stores.js';
  import getUniqNames from './uniqNames.js';

  export let embeds;
  export let breakpoints = [330, 510, 660, 930, 1200];
  export let minFrameWidth = 320;
  export let maxFrameWidth = 1200;

  let activeEmbed = embeds[0];

  $: embedTitles = getUniqNames(embeds);

  // @ts-ignore
  let pymParent;

  const reframe = (embed) => {
    pymParent = new pym.Parent(
      'frame-parent',
      /^http/.test(embed)
        ? embed
        : urljoin(window.location.origin, embed, { trailingSlash: true })
    );
  };

  onMount(() => {
    reframe(activeEmbed);
  });

  afterUpdate(() => {
    reframe(activeEmbed);
  });
</script>

<div class="container">
  <header>
    <img
      src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg"
      alt=""
    />
  </header>

  <nav>
    {#each embeds as embed, i}
      <button
        on:click="{() => {
          activeEmbed = embed;
        }}"
        class:active="{activeEmbed === embed}"
      >
        {embedTitles[i]}
        <a rel="external" target="_blank" href="{embed}" title="{embed}">
          <Fa icon="{faLink}" />
        </a>
      </button>
    {/each}
  </nav>

  <div id="frame-parent" style="width:{$width}px;"></div>
</div>

<div id="home-link">
  <a rel="external" href="./../">
    <Fa icon="{faDesktop}" />
  </a>
</div>

<Resizer
  breakpoints="{breakpoints}"
  minFrameWidth="{minFrameWidth}"
  maxFrameWidth="{maxFrameWidth}"
/>

<style lang="scss">
  @import '@reuters-graphics/style-color/scss/thematic/brand';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  header {
    @include font-display;

    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    margin: 20px 0;
  }

  nav {
    text-align: center;
    margin: 0 auto 20px;
    max-width: 900px;
    button {
      margin: 0 4px 5px;
      background-color: transparent;
      border: 0;
      color: #999;
      padding: 2px 2px;
      cursor: pointer;
      @include font-display;
      font-weight: 400;
      &.active {
        border-bottom: 2px solid #666;
        color: #666;
      }
      &:focus {
        outline: none;
      }
      a {
        color: #bbb;
        font-size: 12px;
        &:hover {
          color: #666;
        }
      }
    }
  }

  #frame-parent {
    border: 1px solid #ddd;
    margin: 0 auto;
    width: var(--width);
  }

  div#home-link {
    position: fixed;
    bottom: 5px;
    left: 10px;
    font-size: 18px;
    a {
      color: #ccc;
      &:hover {
        color: #666;
      }
    }
  }
</style>
