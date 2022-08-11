<script>
  import DownArrow from './DownArrow.svelte';
  import SectionDrowdown from './NavDropdown/SectionDrowdown.svelte';
  import MoreDropdown from './NavDropdown/MoreDropdown.svelte';
  import { normalizeUrl } from './utils/index';
  import { getContext } from 'svelte';

  export let sections = [];

  const activeSection = getContext('nav-active-section');

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

<div class="nav-bar">
  <nav aria-label="Main navigation">
    <ul class="nav-list">
      {#each displaySections as section}
        {#if section.children}
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
              <a href="{normalizeUrl(section.url)}">
                {section.name}
              </a>
              <button class="button">
                <DownArrow rotate="{section.id === $activeSection}" />
              </button>
            </div>
            {#if $activeSection === section.id}
              <SectionDrowdown
                section="{section}"
                headingText="{`Latest in ${section.name}`}"
              />
            {/if}
          </li>
        {:else}
          <li class="nav-item category link">
            <div class="nav-button link">
              <a href="{normalizeUrl(section.url)}">
                {section.name}
              </a>
            </div>
          </li>
        {/if}
      {/each}
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
            <span>More <DownArrow rotate="{$activeSection === 'more'}" /></span>
          </button>
        </div>
        {#if $activeSection === 'more'}
          <MoreDropdown sections="{hiddenSections}" />
        {/if}
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @import './../scss/_colors.scss';
  @import './../scss/_breakpoints.scss';
  @import './../scss/_z-indexes.scss';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  $nav-height: 64px;
  $mobile-nav-height: 56px;

  .nav-bar {
    margin-left: auto;

    @include for-mobile {
      display: none;
    }
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    display: inline-flex;
    padding: 0 10px;
    @include font-display;
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
        color: var(--nav-primary, $tr-dark-grey);
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
          //   background: var(--nav-accent, $tr-orange);
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
        background: var(--nav-accent, $tr-orange);
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
        background: var(--nav-accent, $tr-orange);
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
    @include font-display;
    font-weight: 500;
    font-size: 16px;
    color: var(--nav-primary, $tr-dark-grey);

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
</style>
