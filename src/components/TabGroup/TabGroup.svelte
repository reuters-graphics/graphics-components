<!--
@component
TabGroup

A generalized segmented-control / tab switcher. Extracted from the World Cup
app's in-match view switcher, with the app-specific sticky-scroll glue removed.
Bind `value` to the active tab id; pass a list of `tabs`.

```svelte
<script>
  let view = $state('stats');
</script>

<TabGroup
  bind:value={view}
  tabs={[
    { id: 'stats', label: 'Stats' },
    { id: 'lineups', label: 'Lineups' },
  ]}
  ariaLabel="Match views"
/>
```
-->

<script lang="ts" module>
  export interface Tab {
    /** Stable id — this is what `value` binds to. */
    id: string;
    /** Visible label. */
    label: string;
    /** Hide this tab without removing it from the source array. */
    show?: boolean;
    /** Render but disable interaction. */
    disabled?: boolean;
  }
</script>

<script lang="ts">
  interface Props {
    /** The tabs to render. Tabs with `show: false` are filtered out. */
    tabs: Tab[];
    /** The active tab id (two-way bindable). */
    value: string | undefined;
    /** Accessible label for the tablist. */
    ariaLabel?: string;
    /** Extra class on the tablist container. */
    class?: string;
  }

  let {
    tabs,
    value = $bindable(),
    ariaLabel = 'Views',
    class: className = '',
  }: Props = $props();

  const visibleTabs = $derived(tabs.filter((t) => t.show !== false));
</script>

{#if visibleTabs.length}
  <div class="tab-group {className}" role="tablist" aria-label={ariaLabel}>
    {#each visibleTabs as { id, label, disabled } (id)}
      <button
        type="button"
        role="tab"
        aria-selected={value === id}
        {disabled}
        class:active={value === id}
        onclick={() => (value = id)}
      >
        {label}
      </button>
    {/each}
  </div>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .tab-group {
    display: flex;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;

    button {
      flex: 1;
      @include mixins.text-sm;
      @include mixins.tracking-wide;
      padding-block: clamp(0.56rem, 0.52rem + 0.21vw, 0.69rem);
      width: max-content;
      border: 1px solid var(--theme-colour-tan-grey, #e5e5e5);
      color: var(--theme-colour-text-secondary);
      background-color: var(--theme-colour-background, #fff);
      outline: none;
      cursor: pointer;

      &:first-child {
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
      }
      &:last-child {
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      &.active {
        background-color: var(--theme-colour-muted-grey, #f3f4f6);
        color: var(--theme-colour-text-primary);
        @include mixins.font-medium;
      }
      &:not(:disabled):hover {
        color: var(--theme-colour-text-primary);
        @include mixins.font-medium;
      }
    }
  }
</style>
