<!-- @component `Geocoder` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-controls-geocoder--docs) -->
<script lang="ts">
  import { onDestroy } from 'svelte';
  import { geocode, type GeocodeFeature, type GeocodeOptions } from './geocode';
  import MagnifyingGlass from '../SearchInput/components/MagnifyingGlass.svelte';
  import X from '../SearchInput/components/X.svelte';

  interface Props extends Omit<GeocodeOptions, 'accessToken'> {
    /** Mapbox public access token. */
    accessToken: string;
    /** Placeholder text shown in the search input. */
    searchPlaceholder?: string;
    /** Callback fired when a location is selected from the results. */
    onselect?: (location: { lng: number; lat: number; name: string }) => void;
    /**
     * Minimum number of characters before a request is made. Raising this
     * cuts the number of paid geocoding requests per search. Defaults to 2.
     */
    minLength?: number;
    /**
     * Debounce window in milliseconds between the last keystroke and the
     * request. Raising this fires fewer requests while the user is still
     * typing (each request is billed). Defaults to 300.
     */
    debounceMs?: number;
  }

  let {
    accessToken,
    searchPlaceholder = 'Search for a location',
    onselect,
    minLength = 2,
    debounceMs = 300,
    autocomplete = true,
    bbox,
    country,
    language = ['en'],
    limit = 5,
    proximity,
    types,
    worldview,
    permanent,
    entrances,
  }: Props = $props();

  let query = $state('');
  let suggestions: GeocodeFeature[] = $state([]);
  let selectedIndex = $state(-1);
  let focused = $state(false);

  let showDropdown = $derived(suggestions.length > 0 && focused);

  const instanceId = Math.random().toString(36).slice(2, 9);
  const listboxId = `geocoder-listbox-${instanceId}`;

  let inputEl: HTMLInputElement;
  let debounceTimer: ReturnType<typeof setTimeout>;
  let abortController: AbortController | null = null;

  function handleInput() {
    selectedIndex = -1;
    clearTimeout(debounceTimer);
    abortController?.abort();

    if (query.length < minLength) {
      suggestions = [];
      return;
    }

    debounceTimer = setTimeout(async () => {
      abortController = new AbortController();
      try {
        suggestions = await geocode(
          query,
          {
            accessToken,
            autocomplete,
            bbox,
            country,
            language,
            limit,
            proximity,
            types,
            worldview,
            permanent,
            entrances,
          },
          abortController.signal
        );
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        console.error('Geocoder error:', e);
      }
    }, debounceMs);
  }

  onDestroy(() => {
    clearTimeout(debounceTimer);
    abortController?.abort();
  });

  let active = $derived(query !== '');
  let statusMessage = $derived(
    showDropdown ?
      `${suggestions.length} result${suggestions.length === 1 ? '' : 's'} available`
    : ''
  );

  function selectSuggestion(feature: GeocodeFeature) {
    const { longitude: lng, latitude: lat } = feature.properties.coordinates;
    query = feature.properties.name;
    suggestions = [];
    onselect?.({ lng, lat, name: feature.properties.name });
  }

  function clear() {
    query = '';
    suggestions = [];
    inputEl?.focus();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!showDropdown) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % suggestions.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex =
        selectedIndex <= 0 ? suggestions.length - 1 : selectedIndex - 1;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) selectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      suggestions = [];
      selectedIndex = -1;
    }
  }
</script>

<div class="geocoder-input-wrapper">
  <div class="geocoder-icon">
    <MagnifyingGlass />
  </div>
  <input
    bind:this={inputEl}
    bind:value={query}
    oninput={handleInput}
    onkeydown={handleKeydown}
    onfocus={() => (focused = true)}
    onblur={() => (focused = false)}
    type="text"
    autocapitalize="words"
    autocomplete="off"
    enterkeyhint="search"
    spellcheck="false"
    role="combobox"
    aria-expanded={showDropdown}
    aria-label={searchPlaceholder}
    aria-controls={showDropdown ? listboxId : undefined}
    aria-activedescendant={selectedIndex >= 0 ?
      `${listboxId}-option-${selectedIndex}`
    : undefined}
    aria-autocomplete="list"
    placeholder={searchPlaceholder}
    class="geocoder-input"
  />
  {#if active}
    <button
      class="geocoder-clear"
      type="button"
      aria-label="Clear search"
      onmousedown={(e) => {
        e.preventDefault();
        clear();
      }}
    >
      <X />
    </button>
  {/if}
  <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
    {statusMessage}
  </div>
  {#if showDropdown}
    <ul class="geocoder-results" role="listbox" id={listboxId}>
      {#each suggestions as suggestion, i}
        <li
          id="{listboxId}-option-{i}"
          role="option"
          aria-selected={i === selectedIndex}
          class:active={i === selectedIndex}
          onmousedown={(e) => {
            e.preventDefault();
            selectSuggestion(suggestion);
          }}
          onmouseenter={() => (selectedIndex = i)}
        >
          {suggestion.properties.full_address || suggestion.properties.name}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .geocoder-input-wrapper {
    position: relative;
    width: 100%;
  }

  .geocoder-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .geocoder-clear {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .geocoder-input {
    font-family: var(--theme-font-family-sans-serif);
    font-size: var(--theme-font-size-sm);
    width: 100%;
    height: 46px;
    line-height: 22px;
    padding: 12px 36px 12px 42px;
    border: 1px solid mixins.$theme-colour-brand-rules;
    border-radius: 0.25rem;
    background: mixins.$theme-colour-background;
    box-sizing: border-box;

    &::placeholder {
      color: mixins.$theme-colour-text-secondary;
    }
  }

  .geocoder-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 4px 0 0;
    padding: 0;
    list-style: none;
    background: mixins.$theme-colour-background;
    border-radius: 0.25rem;
    box-shadow: 0 2px 6px mixins.$theme-colour-brand-shadow;
    z-index: 10000;
    overflow: hidden;
  }

  .geocoder-results li {
    padding: 10px 14px;
    cursor: pointer;
    font-family: var(--theme-font-family-sans-serif);
    font-size: var(--theme-font-size-xs);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.active {
      background-color: var(--tr-hover-background-grey);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 767px) {
    .geocoder-icon {
      left: 10px;
      width: 20px;
      height: 20px;
    }

    .geocoder-input {
      height: 42px;
      font-size: var(--theme-font-size-xs);
      padding: 10px 12px 10px 38px;
      border-radius: 0.25rem;
    }
  }
</style>
