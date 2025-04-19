<script lang="ts">
  import DownArrow from './DownArrow.svelte';
  import SectionDropdown from './NavDropdown/SectionDropdown.svelte';
  import MoreDropdown from './NavDropdown/MoreDropdown.svelte';
  import { normalizeUrl } from './utils/index';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  let { sections = [] } = $props();

  const activeSection =
    getContext<Writable<null | string>>('nav-active-section');

  let windowWidth = $state(1200);

  let getDisplayCount = $derived(() => {
    if (windowWidth >= 1300) return 7;
    return 5;
  });

  let navTimeout = $state<ReturnType<typeof setTimeout>>();
  const timeout = 250;

  let displayCount = $derived(getDisplayCount());
  let displaySections = $derived(sections.slice(0, displayCount));
  let hiddenSections = $derived(sections.slice(displayCount));
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="nav-bar">
  <nav aria-label="Main navigation">
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <ul class="nav-list">
      {#each displaySections as section}
        {#if section.children}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <li
            class="nav-item category link"
            onmouseenter={() => {
              navTimeout = setTimeout(
                () => activeSection.set(section.id),
                timeout
              );
            }}
            onfocus={() => activeSection.set(section.id)}
            onmouseleave={() => {
              clearTimeout(navTimeout);
              activeSection.set(null);
            }}
            onblur={() => {
              clearTimeout(navTimeout);
              activeSection.set(null);
            }}
            onclick={() => {
              if ($activeSection === section.id) {
                clearTimeout(navTimeout);
                activeSection.set(null);
              }
            }}
          >
            <div
              class="nav-button link"
              class:open={section.id === $activeSection}
            >
              <a href={normalizeUrl(section.url)}>
                {section.name}
              </a>
              <button class="button">
                <DownArrow rotate={section.id === $activeSection} />
              </button>
            </div>
            {#if $activeSection === section.id}
              <SectionDropdown
                {section}
                headingText={`Latest in ${section.name}`}
              />
            {/if}
          </li>
        {:else}
          <li class="nav-item category link">
            <div class="nav-button link">
              <a href={normalizeUrl(section.url)}>
                {section.name}
              </a>
            </div>
          </li>
        {/if}
      {/each}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <li
        class="nav-item"
        onmouseenter={() => {
          navTimeout = setTimeout(() => activeSection.set('more'), timeout);
        }}
        onfocus={() => activeSection.set('more')}
        onmouseleave={() => {
          clearTimeout(navTimeout);
          activeSection.set(null);
        }}
        onblur={() => {
          clearTimeout(navTimeout);
          activeSection.set(null);
        }}
        onclick={() => {
          if ($activeSection === 'more') {
            clearTimeout(navTimeout);
            activeSection.set(null);
          }
        }}
      >
        <div
          class="nav-button more link"
          class:open={$activeSection === 'more'}
        >
          <button class="button">
            <span>More <DownArrow rotate={$activeSection === 'more'} /></span>
          </button>
        </div>
        {#if $activeSection === 'more'}
          <MoreDropdown sections={hiddenSections} />
        {/if}
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @use './../scss/_colors.scss' as *;
  @use './../scss/_breakpoints.scss' as *;
  @use './../scss/_z-indexes.scss' as *;
  @use '../../../scss/mixins' as *;

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
</style>
