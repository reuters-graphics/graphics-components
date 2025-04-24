<script lang="ts">
  import Fa from 'svelte-fa';
  import { faDesktop, faLink } from '@fortawesome/free-solid-svg-icons';
  import pym from 'pym.js';
  import urljoin from 'proper-url-join';
  import Resizer from './Resizer/index.svelte';
  import { width } from './stores';
  import getUniqNames from './uniqNames';
  import Typeahead from './Typeahead/index.svelte';
  import Dropdown from './Dropdown/index.svelte';
  import ReutersGraphicsLogo from '../ReutersGraphicsLogo/ReutersGraphicsLogo.svelte';

  interface Props {
    embeds: string[];
    breakpoints?: number[];
    minFrameWidth?: number;
    maxFrameWidth?: number;
    searchType?: 'dropdown' | 'typeahead';
  }

  let {
    embeds = [],
    breakpoints = [330, 510, 660, 930, 1200],
    minFrameWidth = 320,
    maxFrameWidth = 1200,
    searchType = 'dropdown',
  }: Props = $props();

  const getDefaultEmbed = (embeds: Props['embeds']) => {
    if (embeds.length === 0) return '';
    if (typeof window === 'undefined') return embeds[0];
    const lastActiveEmbed = window.localStorage.getItem('framer-active-embed');
    if (!lastActiveEmbed) return embeds[0];
    if (embeds.indexOf(lastActiveEmbed) > -1) return lastActiveEmbed;
    return embeds[0];
  };

  let activeEmbed = $state(getDefaultEmbed(embeds));
  let activeEmbedIndex = $derived(embeds.indexOf(activeEmbed));

  let embedTitles = $derived.by(() => {
    if (embeds.length === 0) return '';
    return getUniqNames(embeds);
  });

  const reframe = (embed: string) => {
    if (!embed) return;
    // Bit of hack for handling adding query strings dynamically to embeds.
    // cf. also the value prop on the Typeahead component...
    const activeEmbed =
      embeds.indexOf(embed) > -1 ?
        embed
      : embeds[activeEmbedIndex] || embeds[0];
    new pym.Parent(
      'frame-parent',
      /^http/.test(activeEmbed) ? activeEmbed : (
        urljoin(window.location.origin, activeEmbed, { trailingSlash: true })
      )
    );
  };

  $effect(() => {
    reframe(activeEmbed);
  });
</script>

<div class="container">
  <header>
    <ReutersGraphicsLogo width="120px" />
  </header>

  {#if embeds.length === 0}
    <div class="no-embeds">
      <p>No embeds to show.</p>
    </div>
  {:else}
    {#if searchType === 'typeahead'}
      <div id="typeahead-container">
        <div class="embed-link">
          <a
            rel="external"
            target="_blank"
            href={activeEmbed}
            title={activeEmbed}
          >
            Live link <Fa icon={faLink} />
          </a>
        </div>
        <Typeahead
          label="Select an embed"
          value={embedTitles[embeds.indexOf(activeEmbed)] ||
            embedTitles[activeEmbedIndex] ||
            embedTitles[0]}
          extract={(d) => embedTitles[d.index]}
          data={embeds.map((embed, index) => ({ index, embed }))}
          showDropdownOnFocus={true}
          onselect={(detail) => {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem(
                'framer-active-embed',
                detail.original.embed
              );
            }
            activeEmbed = detail.original.embed;
            // activeEmbedIndex = detail.original.index;
          }}
        />
      </div>
    {:else}
      <div id="dropdown-container">
        <div>
          <div class="embed-link">
            <a
              rel="external"
              target="_blank"
              href={activeEmbed}
              title={activeEmbed}
            >
              Live link <Fa icon={faLink} />
            </a>
          </div>
        </div>
        <Dropdown
          data={embeds.map((embed, index) => ({
            index,
            embed,
            title: embedTitles[index],
          }))}
          bind:selected={activeEmbed}
        />
      </div>
    {/if}

    <div id="preview-label" style="width:{$width}px;">
      <p>Preview</p>
    </div>
    <div id="frame-parent" style="width:{$width}px;"></div>
  {/if}
</div>

<div id="home-link">
  <a rel="external" href="./../">
    <Fa icon={faDesktop} />
  </a>
</div>

{#if embeds.length > 0}
  <Resizer {breakpoints} {minFrameWidth} {maxFrameWidth} />
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  header {
    text-align: center;
    margin: 20px 0;
  }

  .no-embeds {
    background-color: #efefef;
    border-radius: 4px;
    padding: 5px 10px;
    p {
      text-align: center;
      margin: 0;
      @include mixins.font-note;
    }
  }

  div#typeahead-container,
  div#dropdown-container {
    max-width: 660px;
    margin: 0 auto 15px;
    position: relative;
    div.embed-link {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      z-index: 2;
      a {
        font-family: 'Knowledge', 'Source Sans Pro', Arial, sans-serif;
        color: #bbb;
        font-size: 12px;
        text-decoration: none !important;
        &:hover {
          color: #666;
        }
      }
    }
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
    :global(iframe) {
      display: block;
    }
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
