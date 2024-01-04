<script>
  import DownArrow from './DownArrow.svelte';
  import SectionDropdown from './NavDropdown/SectionDropdown.svelte';
  import MoreDropdown from './NavDropdown/MoreDropdown.svelte';
  import { normalizeUrl, normalizeUrlJp } from './utils/index';
  import { getContext } from 'svelte';

  export let sections = [];
  export let lang = 'en';

  const activeSection = getContext('nav-active-section');
  const normaliseUrl = lang === 'ja' ? normalizeUrlJp : normalizeUrl;
  const labels = {
    More: { default: 'More ', ja: 'さらに見る' },
    'Latest in': {
      default: (name) => `Latest in ${name}`,
      ja: (name) => `${name}の記事を見る`,
    },
  };

  let windowWidth = 1200;

  $: getDisplayCount = () => {
    if (windowWidth >= 1300) return 7;
    return 5;
  };

  let navTimeout;
  const timeout = 250;

  $: displayCount = getDisplayCount();
  $: displaySections = sections.slice(0, displayCount);
  $: hiddenSections = sections.slice(displayCount);
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<div class="nav-bar" lang="{lang}">
  <nav aria-label="Main navigation">
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <ul class="nav-list">
      {#each displaySections as section}
        {#if section.children}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li
            class="nav-item category link"
            on:mouseenter="{() => {
              navTimeout = setTimeout(
                () => activeSection.set(section.id),
                timeout
              );
            }}"
            on:focus="{() => activeSection.set(section.id)}"
            on:mouseleave="{() => {
              clearTimeout(navTimeout);
              activeSection.set(null);
            }}"
            on:blur="{() => {
              clearTimeout(navTimeout);
              activeSection.set(null);
            }}"
            on:click="{() => {
              if ($activeSection === section.id) {
                clearTimeout(navTimeout);
                activeSection.set(null);
              }
            }}"
          >
            <div
              class="nav-button link"
              class:open="{section.id === $activeSection}"
            >
              <a href="{normaliseUrl(section.url)}">
                {section.name}
              </a>
              <button class="button">
                <DownArrow rotate="{section.id === $activeSection}" />
              </button>
            </div>
            {#if $activeSection === section.id}
              <SectionDropdown
                section="{section}"
                headingText="{labels['Latest in'][lang]
                  ? labels['Latest in'][lang](section.name)
                  : labels['Latest in'].default(section.name)}"
                lang="{lang}"
              />
            {/if}
          </li>
        {:else}
          <li class="nav-item category link">
            <div class="nav-button link">
              <a href="{normaliseUrl(section.url)}">
                {section.name}
              </a>
            </div>
          </li>
        {/if}
      {/each}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li
        class="nav-item"
        on:mouseenter="{() => {
          navTimeout = setTimeout(() => activeSection.set('more'), timeout);
        }}"
        on:focus="{() => activeSection.set('more')}"
        on:mouseleave="{() => {
          clearTimeout(navTimeout);
          activeSection.set(null);
        }}"
        on:blur="{() => {
          clearTimeout(navTimeout);
          activeSection.set(null);
        }}"
        on:click="{() => {
          if ($activeSection === 'more') {
            clearTimeout(navTimeout);
            activeSection.set(null);
          }
        }}"
      >
        <div
          class="nav-button more link"
          class:open="{$activeSection === 'more'}"
        >
          <button class="button">
            <span
              >{labels.More[lang] || labels.More.default}<DownArrow
                rotate="{$activeSection === 'more'}"
              /></span
            >
          </button>
        </div>
        {#if $activeSection === 'more'}
          <MoreDropdown sections="{hiddenSections}" lang="{lang}" />
        {/if}
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @import './../scss/_colors.scss';
  @import './../scss/_breakpoints.scss';
  @import './../scss/_z-indexes.scss';
  @import '../../../scss/mixins';

  $nav-height: 64px;
  $mobile-nav-height: 56px;

  .nav-bar {
    margin-left: auto;

    @include for-mobile {
      display: none;
    }
  }

  .nav-list {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;

    font-family: var(--theme-font-family-sans-serif);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }

  .nav-item {
    display: inline-flex;
    margin: 0;
    padding: 0 10px;
    @include font-sans;
    font-weight: 500;
    font-size: 16px;

    .nav-button {
      position: relative;
      height: $nav-height;
      display: flex;
      align-items: center;
      cursor: pointer;

      a,
      span {
        color: var(--nav-primary, var(--tr-dark-grey));
        text-decoration: none;
        &:hover,
        &:active {
          text-decoration: none;
          // &:after {
          //   content: '';
          //   position: absolute;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;
          //   display: block;
          //   height: 4px;
          //   background: var(--nav-accent, var(--tr-orange));
          //   opacity: 0.5;
          // }
        }
      }

      @include for-mobile {
        height: $mobile-nav-height;
      }

      &.open:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        height: 4px;
        background: var(--nav-accent, var(--tr-orange));
        opacity: 1 !important;
      }
    }

    .link {
      position: relative;
      line-height: 64px;

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        height: 4px;
        background: var(--nav-accent, var(--tr-orange));
      }
    }
  }

  .button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: unset;
    appearance: none;
    cursor: pointer;
    @include font-sans;
    font-weight: 500;
    font-size: 16px;
    color: var(--nav-primary, var(--tr-dark-grey));

    &:not(.focused) {
      outline: none;
    }
  }

  .category {
    display: none;

    // Hide all but first 4
    @include for-tablet-down {
      &:nth-child(-n + 4) {
        display: inline-flex;
      }
    }

    // Hide all but first 5
    @include for-desktop {
      &:nth-child(-n + 5) {
        display: inline-flex;
      }
    }

    // Hide all but first 7
    @include for-wide-desktop {
      &:nth-child(-n + 7) {
        display: inline-flex;
      }
    }
  }

  .nav-bar[lang='ja'] {
    .nav-item,
    .button {
      font-weight: 600;
      font-size: 14px;
    }
    .button {
      font-size: 14px;
    }
  }
</style>
