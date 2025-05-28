<script lang="ts">
  import { Markdown } from '@reuters-graphics/svelte-markdown';
  import Headshot from './Headshot.svelte';
  import { MediaQuery } from 'svelte/reactivity';

  interface Props {
    img: string;
    name: string;
    role?: string;
    text: string;
    colour?: string;
  }

  let { name, role, img, text, colour }: Props = $props();

  const mobile = new MediaQuery('max-width: 600px');
</script>

<div>
  <div class="wrapper-profile">
    <div>
      <Headshot {img} {colour} />
    </div>
    <div class="text">
      <div class="title">{name}</div>
      <div class="role">
        {role || ''}
      </div>
      {#if !mobile.current}
        <div class="description desktop">
          <Markdown source={text} />
        </div>
      {/if}
    </div>
  </div>

  {#if mobile.current}
    <div class="description mobile">
      <Markdown source={text} />
    </div>
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .wrapper-profile {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 1rem;
    width: 100%;
    min-height: 5.5rem;
  }

  .title {
    @include mixins.font-bold;
    @include mixins.text-base;
    @include mixins.leading-none;

    @media (max-width: 450px) {
      font-size: calc(0.9 * var(--theme-font-size-base, 1rem));
    }
  }

  .role {
    border-block-start: 0.5px solid var(--tr-muted-grey);
    margin-inline-start: -0.75rem;
    padding-inline-start: 0.75rem;
    margin-block-start: 0.25rem;
    padding-block-start: 0.25rem;

    @include mixins.font-note;
    @include mixins.text-secondary;
    @include mixins.text-sm;
    @include mixins.font-light;
    @include mixins.leading-tighter;
    @include mixins.fmb-4;

    @media (max-width: 450px) {
      @include mixins.text-xs;
    }
  }

  .description {
    :global(p) {
      @include mixins.font-note;
      font-size: calc(0.9 * var(--theme-font-size-base, 1rem));
      font-weight: 300;
      @include mixins.fmb-0;
      text-wrap: pretty;
    }
    &.desktop {
      display: block;
    }
    &.mobile {
      display: none;
    }
    @media (max-width: 600px) {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }
  }
</style>
