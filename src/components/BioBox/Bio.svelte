<!-- @component One author's card — avatar (falling back to the Kinesis logo), name, title, social links and bio. Used by BioBox, but works standalone. -->
<script lang="ts">
  import KinesisLogo from '../KinesisLogo/KinesisLogo.svelte';
  import SocialLinks from './SocialLinks.svelte';
  import type { Author } from './types';

  interface Props extends Author {
    /** Extra class on the root element. */
    class?: string;
  }

  let {
    name,
    title,
    bio,
    imageUrl,
    imageAlt,
    links = [],
    class: cls = '',
  }: Props = $props();
</script>

<div class="bio {cls}">
  <div class="bio-header">
    <div class="bio-identity">
      {#if imageUrl}
        <img class="bio-avatar" src={imageUrl} alt={imageAlt ?? name} />
      {:else}
        <div class="bio-avatar bio-avatar-fallback" aria-hidden="true">
          <KinesisLogo width="60%" />
        </div>
      {/if}
      <div class="bio-names">
        <p class="bio-name">{name}</p>
        {#if title}<p class="bio-title">{title}</p>{/if}
      </div>
    </div>
    {#if links.length}
      <div class="bio-links bio-links-inline">
        <SocialLinks {links} {name} />
      </div>
    {/if}
  </div>

  {#if bio}
    <p class="bio-text">{bio}</p>
  {/if}

  {#if links.length}
    <div class="bio-links bio-links-stacked">
      <SocialLinks {links} {name} />
    </div>
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .bio {
    padding-block: 1rem;
  }

  .bio-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .bio-identity {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .bio-avatar {
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .bio-avatar-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--theme-colour-background, #fff);
    border: 1px solid var(--theme-colour-brand-rules, #e5e5e5);
  }

  .bio-name {
    @include mixins.font-knowledge;
    @include mixins.font-bold;
    @include mixins.text-base;
    margin: 0;
    line-height: 1.2;
    color: var(--theme-colour-text-primary, #121212);
  }

  .bio-title {
    @include mixins.font-knowledge;
    @include mixins.text-sm;
    margin: 0.1rem 0 0;
    color: var(--theme-colour-text-secondary, #666);
  }

  .bio-text {
    @include mixins.font-knowledge;
    @include mixins.text-sm;
    margin: 0.75rem 0 0;
    line-height: 1.5;
    color: var(--theme-colour-text-primary, #121212);
  }

  .bio-links-stacked {
    display: none;
  }

  @media (max-width: 520px) {
    .bio-links-inline {
      display: none;
    }

    .bio-links-stacked {
      display: block;
      margin-top: 0.75rem;
    }
  }
</style>
