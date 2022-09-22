<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDesktop, faLink } from '@fortawesome/free-solid-svg-icons';
  import { onMount, afterUpdate } from 'svelte';
  import pym from 'pym.js';
  import urljoin from 'proper-url-join';
  import Resizer from './Resizer/index.svelte';
  import { width } from './stores.js';
  import getUniqNames from './uniqNames.js';
  import Typeahead from './Typeahead/index.svelte';

  export let embeds;
  export let breakpoints = [330, 510, 660, 930, 1200];
  export let minFrameWidth = 320;
  export let maxFrameWidth = 1200;

  const getDefaultEmbed = () => {
    if (typeof window === 'undefined') return embeds[0];
    const lastActiveEmbed = window.localStorage.getItem('framer-active-embed');
    if (!lastActiveEmbed) return embeds[0];
    if (embeds.indexOf(lastActiveEmbed) > -1) return lastActiveEmbed;
    return embeds[0];
  };

  let activeEmbed = getDefaultEmbed();
  let activeEmbedIndex = embeds.indexOf(activeEmbed);

  $: embedTitles = getUniqNames(embeds);

  // @ts-ignore
  let pymParent;

  const reframe = (embed) => {
    // Bit of hack for handling adding query strings dynamically to embeds.
    // cf. also the value prop on the Typeahead component...
    const activeEmbed =
      embeds.indexOf(embed) > -1
        ? embed
        : embeds[activeEmbedIndex] || embeds[0];
    pymParent = new pym.Parent(
      'frame-parent',
      /^http/.test(activeEmbed)
        ? activeEmbed
        : urljoin(window.location.origin, activeEmbed, { trailingSlash: true })
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

  <div id="typeahead-container">
    <div class="embed-link">
      <a
        rel="external"
        target="_blank"
        href="{activeEmbed}"
        title="{activeEmbed}"
      >
        Live link <Fa icon="{faLink}" />
      </a>
    </div>
    <Typeahead
      label="Select an embed"
      value="{embedTitles[embeds.indexOf(activeEmbed)] ||
        embedTitles[activeEmbedIndex] ||
        embedTitles[0]}"
      extract="{(d) => embedTitles[d.index]}"
      data="{embeds.map((embed, index) => ({ index, embed }))}"
      placeholder="{'Search'}"
      showDropdownOnFocus="{true}"
      on:select="{({ detail }) => {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(
            'framer-active-embed',
            detail.original.embed
          );
        }
        activeEmbed = detail.original.embed;
        activeEmbedIndex = detail.original.index;
      }}"
    />
  </div>

  <div id="preview-label" style="width:{$width}px;">
    <p>Preview</p>
  </div>
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

<style>
  header {
    font-family: 'Knowledge', 'Source Sans Pro', Arial, sans-serif;
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    margin: 20px 0;
  }

  div#typeahead-container {
    max-width: 660px;
    margin: 0 auto 15px;
    position: relative;
  }
  div#typeahead-container div.embed-link {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    z-index: 2;
  }
  div#typeahead-container div.embed-link a {
    font-family: 'Knowledge', 'Source Sans Pro', Arial, sans-serif;
    color: #bbb;
    font-size: 12px;
    text-decoration: none !important;
  }
  div#typeahead-container div.embed-link a:hover {
    color: #666;
  }

  div#preview-label {
    margin: 0 auto;
  }
  div#preview-label p {
    font-family: 'Knowledge', 'Source Sans Pro', Arial, sans-serif;
    color: #aaa;
    font-size: 0.75rem;
    margin: 0 0 0.25rem;
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
  }
  div#home-link a {
    color: #ccc;
  }
  div#home-link a:hover {
    color: #666;
  }
</style>
