<!--
  @component A bordered box of one or more author bios (rendered as Bio cards), echoing the contributor box on Reuters.com stories.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-furniture-biobox--docs)
-->
<script lang="ts">
  import Block from '../Block/Block.svelte';
  import Bio from './Bio.svelte';
  import type { Author } from './types';

  interface Props {
    /** Authors to display, in order. */
    authors: Author[];
    /** ID on the containing block. */
    id?: string;
    /** Extra classes on the containing block. */
    class?: string;
  }

  let { authors, id = '', class: cls = 'fmy-5' }: Props = $props();
</script>

{#if authors.length}
  <Block {id} class="biobox {cls}">
    <div class="biobox-inner">
      {#each authors as author, i}
        <Bio {...author} />
        {#if i < authors.length - 1}
          <hr class="biobox-divider" />
        {/if}
      {/each}
    </div>
  </Block>
{/if}

<style lang="scss">
  .biobox-inner {
    padding: 0.5rem 1.25rem;
    border: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    border-radius: 4px;
    background: var(--theme-colour-background, #fff);
  }

  .biobox-divider {
    border: 0;
    border-top: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    opacity: 0.5;
    margin: 0.5rem 0;
  }

  @media (max-width: 767px) {
    .biobox-inner {
      padding-inline: 1rem;
    }
  }
</style>
