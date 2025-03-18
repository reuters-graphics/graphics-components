<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /**
     * Whether to wrap the graphic with an aria hidden tag.
     */
    hidden?: boolean;
    children: Snippet;
  }

  let { hidden = false, children }: Props = $props();
</script>

{#if hidden && children}
  <div aria-hidden="true">
    {@render children()}
  </div>
{:else if children}
  {@render children()}
{/if}
