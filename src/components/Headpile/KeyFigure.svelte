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
      <div class="role">{role || ''}</div>
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
    gap: 20px;
    width: 100%;
    min-height: 100px;
    @media (max-width: 600px) {
      align-items: center;
      margin-bottom: 10px;
      .text {
        flex-grow: 1;
        margin-top: 20px;
      }
    }
  }

  .title {
    @include mixins.font-bold;
    @include mixins.text-base;
    line-height: 1.125;
  }

  .role {
    border-top: 1px solid #dedede;
    margin-top: 5px;
    padding-top: 5px;
    margin-left: -10px;
    padding-left: 10px;
    @include mixins.fmb-2;
    @include mixins.font-note;
    @include mixins.text-sm;
    @include mixins.text-secondary;
    font-weight: 300;
    line-height: 1.25;
    @media (max-width: 600px) {
      margin-left: 0px;
      padding-left: 0;
      @include mixins.fmb-4;
    }
  }

  .description {
    @include mixins.fmb-3;
    :global(p) {
      @include mixins.font-note;
      font-size: calc(0.925 * var(--theme-font-size-base, 1rem));
      font-weight: 300;
    }
    &.desktop {
      display: block;
    }
    &.mobile {
      display: none;
      @include mixins.fmt-2;
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

  .text {
    margin-bottom: -20px;
  }
</style>
