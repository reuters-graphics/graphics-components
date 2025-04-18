<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props {
    value: string;
    autofocus?: boolean;
    debounce?: number;
    label?: string | Snippet;
    hideLabel?: boolean;
    id?: string;
    ref: HTMLElement;
    removeFormAriaAttributes?: boolean;
    ontype?: (value: string) => void;
    onclear?: () => void;
  }

  let {
    value = $bindable(''),
    autofocus = false,
    debounce = 0,
    label = 'Label',
    hideLabel = false,
    id = 'search' + Math.random().toString(36),
    ref = $bindable(),
    removeFormAriaAttributes = false,
    ontype = (_value: string) => {},
    onclear = () => {},
    ...restProps
  }: Props & HTMLInputAttributes = $props();

  import { onMount } from 'svelte';

  let prevValue = value;
  let timeout: ReturnType<typeof setTimeout>;
  let calling = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounceFn(fn: () => any) {
    if (calling) return;
    calling = true;
    timeout = setTimeout(() => {
      fn();
      calling = false;
    }, debounce);
  }

  onMount(() => {
    if (autofocus) window.requestAnimationFrame(() => ref?.focus());
    return () => clearTimeout(timeout);
  });

  $effect(() => {
    if (value.length > 0 && value !== prevValue) {
      if (debounce > 0) {
        debounceFn(() => ontype(value));
      } else {
        ontype(value);
      }
    }

    if (value.length === 0 && prevValue.length > 0) onclear();

    prevValue = value;
  });
</script>

<form
  data-svelte-search
  role={removeFormAriaAttributes ? null : 'search'}
  aria-labelledby={removeFormAriaAttributes ? null : id}
  action=""
  onsubmit={(e) => {
    e.preventDefault();
  }}
>
  <label
    id="{id}-label"
    for={id}
    style={hideLabel ?
      'position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;'
    : undefined}
  >
    {#if typeof label === 'string'}
      {label}
    {:else}
      {@render label()}
    {/if}
  </label>
  <input
    bind:this={ref}
    bind:value
    {id}
    name="search"
    type="search"
    placeholder="Search..."
    autocomplete="off"
    spellcheck="false"
    {...restProps}
  />
</form>
