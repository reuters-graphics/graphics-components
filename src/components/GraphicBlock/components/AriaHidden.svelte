<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /**
     * Whether to wrap the graphic with an aria hidden tag.
     */
    hidden?: boolean;
    /** Content to put inside `AriaHidden`*/
    children: Snippet;
  }

  let { hidden = false, children }: Props = $props();
</script>

{#if hidden}
  <div aria-hidden="true">
    {@render children()}
  </div>
{:else}
  {@render children()}
{/if}
