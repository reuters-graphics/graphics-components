<!-- @component A row of accessible social and email icon links for one author. Used inside Bio. -->
<script lang="ts">
  import type { SocialLink, SocialPlatform } from './types';

  interface Props {
    /** Links to render. Unknown platforms fall back to a generic link icon. */
    links: SocialLink[];
    /** Author name, used to build default accessible labels. */
    name?: string;
  }

  let { links, name = '' }: Props = $props();

  // Normalize an email destination into a usable href.
  function hrefFor(link: SocialLink): string {
    if (link.platform === 'email' && !/^mailto:/i.test(link.url)) {
      return `mailto:${link.url}`;
    }
    return link.url;
  }

  // Default, screen-reader-friendly label per platform.
  const PLATFORM_NOUN: Record<SocialPlatform, string> = {
    email: 'Email',
    x: 'X profile of',
    twitter: 'X profile of',
    linkedin: 'LinkedIn profile of',
    facebook: 'Facebook profile of',
    instagram: 'Instagram profile of',
    bluesky: 'Bluesky profile of',
    link: 'Profile of',
  };

  function labelFor(link: SocialLink): string {
    if (link.label) return link.label;
    const noun = PLATFORM_NOUN[link.platform] ?? PLATFORM_NOUN.link;
    return name ? `${noun} ${name}` : noun;
  }
</script>

<div class="social-links">
  {#each links as link}
    <a
      class="social-link"
      href={hrefFor(link)}
      aria-label={labelFor(link)}
      target={link.platform === 'email' ? null : '_blank'}
      rel={link.platform === 'email' ? null : 'noreferrer'}
    >
      {#if link.platform === 'email'}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          />
          <path
            d="M4 7l8 6 8-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {:else if link.platform === 'x' || link.platform === 'twitter'}
        <svg viewBox="0 0 30 30" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M17.923 14.387 25.569 5.5h-1.812l-6.64 7.717L11.817 5.5H5.7l8.018 11.67L5.7 26.49h1.812l7.01-8.15 5.6 8.15h6.116l-8.316-12.102Zm-2.482 2.885-.812-1.162-6.464-9.246h2.783l5.216 7.462.813 1.162 6.78 9.7h-2.782l-5.534-7.915Z"
          />
        </svg>
      {:else if link.platform === 'linkedin'}
        <svg viewBox="0 0 21 21" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z"
          />
        </svg>
      {:else if link.platform === 'facebook'}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.43 0-4.05 1.48-4.05 4.2v2.2H7.8V13h2.7v8h3Z"
          />
        </svg>
      {:else if link.platform === 'instagram'}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      {:else if link.platform === 'bluesky'}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 10.8C10.9 8.6 7.9 4.6 5.2 3.2 2.6 1.9 1.6 2.4 1 2.9.3 3.5 0 4.7 0 5.4c0 .7.4 5.6.6 6.4.7 2.7 3.5 3.6 6.1 3.3-3.8.6-7.2 2-2.8 6.9 4.9 5 6.7-1 7.6-4.1.9 3.1 2 8.9 7.5 4.1 4.1-4.1 1.1-6.3-2.7-6.9 2.6.3 5.4-.6 6.1-3.3.2-.8.6-5.7.6-6.4 0-.7-.3-1.9-1-2.5-.6-.5-1.6-1-4.2.3C16.1 4.6 13.1 8.6 12 10.8Z"
          />
        </svg>
      {:else}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {/if}
    </a>
  {/each}
</div>

<style lang="scss">
  .social-links {
    display: inline-flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    border-radius: 4px;
    color: var(--theme-colour-text-secondary, #666);
    background: transparent;
    text-decoration: none;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }

  .social-link:hover,
  .social-link:focus-visible {
    color: var(--theme-colour-text-primary, #121212);
    border-color: var(--theme-colour-text-secondary, #666);
    background: rgb(0 0 0 / 3%);
  }

  .social-link svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }
</style>
