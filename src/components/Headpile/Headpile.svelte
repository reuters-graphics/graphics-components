<script lang="ts">
  import type { ContainerWidth } from '../@types/global';
  import Block from '../Block/Block.svelte';
  import KeyFigure from './KeyFigure.svelte';

  interface Props {
    /**
     * Add classes to target with custom CSS.
     */
    class: string;
    /**
     * Add an id to target with custom CSS.
     */
    id: string;
    /**
     * Width of the container.
     */
    width: Extract<ContainerWidth, 'normal' | 'wide'>;
    /**
     * Default background colour to be used as a mount behind the headshot.
     */
    colour: string;
    /**
     * Individual figures -- i.e., people -- for the headpile.
     */
    figures: {
      /**
       * Headshot image src. Be sure to prefix the image
       *
       * ```typescript
       * import { assets } from '$app/paths';
       *
       * const imgSrc = `${assets}/images/my-image.jpg`;
       * ```
       */
      img: string;
      /**
       * Figure name.
       */
      name: string;
      /**
       * Figure role or title.
       */
      role?: string;
      /**
       * Text describing the person.
       */
      text: string;
      /**
       * Background colour to be used as a mount behind the headshot.
       */
      colour?: string;
    }[];
  }

  let {
    figures,
    class: cls,
    id,
    width = 'normal',
    colour = '#cccccc',
  }: Props = $props();
</script>

<Block class={cls} {id} {width}>
  <div class="figures fmy-6">
    {#each figures as figure}
      <KeyFigure {...{ ...figure, colour: figure.colour ?? colour }} />
    {/each}
  </div>
</Block>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  div.figures {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
