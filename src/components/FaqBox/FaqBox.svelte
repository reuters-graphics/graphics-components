<!-- @component `FaqBox` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-faqbox--docs) -->
<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
  import type { FaqItem } from './types';
  import Block from '../Block/Block.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';
  import { normalizeFaqItems } from './normalize';

  interface Props {
    /**
     * Question/answer pairs. Each answer is a markdown string. Malformed
     * entries (missing question or answer) are skipped, and the whole section
     * is omitted when none remain.
     */
    faq: FaqItem[];
    /**
     * Section heading.
     */
    title?: string;
    /**
     * Width of the component within the text well.
     */
    width?: ContainerWidth;
    /**
     * Add extra classes to the block tag to target it with custom CSS.
     */
    class?: string;
    /**
     * Add an id to the block tag to target it with custom CSS.
     */
    id?: string;
  }

  let {
    faq,
    title = 'Frequently asked questions',
    width = 'normal',
    class: cls = '',
    id = '',
  }: Props = $props();

  // Guard against malformed rows and decide whether to render at all.
  const items = $derived(normalizeFaqItems(faq));
</script>

{#if items.length}
  <aside class="faqbox">
    <Block {width} {id} class="{cls} faq-block">
      <h3 class="faq-title">{title}</h3>
      <div class="faq-list">
        <!--
          Native <details>/<summary> disclosures are keyboard- and
          screen-reader-accessible without extra ARIA wiring. Collapsed by
          default so the section stays short at rest and expands on demand.
          No key: questions aren't guaranteed unique (CMS/ArchieML content),
          and the list is only ever replaced wholesale, so index keying is safe.
        -->
        {#each items as item}
          <details class="faq-item">
            <summary class="faq-question">
              <span class="faq-question-text">{item.q}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </summary>
            <div class="faq-answer">
              <Markdown source={item.a} />
            </div>
          </details>
        {/each}
      </div>
    </Block>
  </aside>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .faq-title {
    @include mixins.font-subhed;
    @include mixins.text-lg;
    @include mixins.font-semibold;
    @include mixins.leading-tighter;
    @include mixins.text-primary;
    margin: 0 0 0.75rem;
  }

  .faq-list {
    margin: 0;
    border-top: 1px solid var(--theme-colour-brand-rules);
  }

  .faq-item {
    border-bottom: 1px solid var(--theme-colour-brand-rules);
  }

  .faq-question {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
    list-style: none;
    padding: 0.75rem 0;
    @include mixins.font-subhed;
    @include mixins.text-base;
    @include mixins.font-regular;
    @include mixins.leading-tight;
    @include mixins.text-primary;

    // Hide the default disclosure triangle across browsers.
    &::-webkit-details-marker {
      display: none;
    }

    &:hover .faq-question-text {
      text-decoration: underline;
    }
  }

  // A CSS chevron that rotates when the item is open — no icon asset needed.
  .faq-icon {
    flex: 0 0 auto;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.15rem;
    border-right: 2px solid var(--theme-colour-text-secondary);
    border-bottom: 2px solid var(--theme-colour-text-secondary);
    transform: rotate(45deg);
    transition: transform 0.2s ease;
  }

  .faq-item[open] .faq-icon {
    transform: rotate(-135deg);
  }

  .faq-answer {
    padding: 0 0 0.75rem;

    :global(p) {
      @include mixins.font-note;
      @include mixins.text-sm;
      @include mixins.font-light;
      @include mixins.leading-tight;
      @include mixins.text-secondary;
      margin: 0 0 0.5rem;
    }

    :global(p:last-child) {
      margin-bottom: 0;
    }
  }
</style>
