<!--
  @component A row of social share buttons (X, Facebook, LinkedIn, email, copy link) plus an optional licensing button, mirroring Reuters.com's share toolbar.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-furniture-sharebar--docs)
-->
<script lang="ts">
  import { onDestroy } from 'svelte';
  import Block from '../Block/Block.svelte';

  interface Props {
    /**
     * Canonical URL to share. When omitted, the live `window.location.href` is
     * read at click time so a shared link reproduces the reader's current view.
     */
    url?: string;
    /** Headline used as the share text and email subject. */
    headline?: string;
    /** Destination for the "Purchase Licensing Rights" button. */
    licensingUrl?: string;
    /** Hide the "Purchase Licensing Rights" button when false. */
    showLicensing?: boolean;
    /** ID on the containing block. */
    id?: string;
    /** Extra classes on the containing block. */
    class?: string;
  }

  let {
    url,
    headline = '',
    licensingUrl = 'https://www.reutersagency.com/en/licensereuterscontent/?utm_medium=rcom-article-media&utm_campaign=rcom-rcp-lead',
    showLicensing = true,
    id = '',
    class: cls = 'fmy-5',
  }: Props = $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout> | null = null;

  /** Resolve the URL to share, falling back to the live page URL. */
  function shareTarget(): string {
    return url ?? (typeof window !== 'undefined' ? window.location.href : '');
  }

  /** Open a centered popup for a social share dialog. */
  function openPopup(shareUrl: string) {
    if (typeof window === 'undefined') return;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
  }

  function shareOnX() {
    const u = encodeURIComponent(shareTarget());
    const text = encodeURIComponent(headline);
    openPopup(`https://twitter.com/intent/tweet?url=${u}&text=${text}`);
  }

  function shareOnFacebook() {
    const u = encodeURIComponent(shareTarget());
    openPopup(`https://www.facebook.com/sharer/sharer.php?u=${u}`);
  }

  function shareOnLinkedIn() {
    const u = encodeURIComponent(shareTarget());
    openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`);
  }

  function shareViaEmail() {
    if (typeof window === 'undefined') return;
    const subject = encodeURIComponent(headline);
    const body = encodeURIComponent(shareTarget());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  /**
   * Legacy clipboard fallback for contexts where the async Clipboard API is
   * unavailable or blocked — most notably inside a cross-origin iframe (how
   * Reuters embeds graphics), where `navigator.clipboard.writeText` rejects
   * without `clipboard-write` permission. Uses a hidden textarea +
   * `document.execCommand('copy')`, which acts on the document's own selection
   * during the click gesture.
   */
  function legacyCopy(value: string): boolean {
    if (typeof document === 'undefined') return false;
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    const selection = document.getSelection();
    const previousRange =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    textarea.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(textarea);
    if (previousRange && selection) {
      selection.removeAllRanges();
      selection.addRange(previousRange);
    }
    return ok;
  }

  function showCopied() {
    copied = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      copied = false;
    }, 2000);
  }

  async function copyLink() {
    const value = shareTarget();
    if (!value) return;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(value);
        showCopied();
        return;
      } catch {
        // Fall through to the legacy path below.
      }
    }
    if (legacyCopy(value)) showCopied();
  }

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
</script>

<Block {id} class="share-bar-block {cls}" width="normal">
  <div class="share-bar" data-testid="ShareBar" dir="ltr">
    <div class="share-buttons" role="group" aria-label="Share this article">
      <button
        type="button"
        class="icon-button"
        aria-label="Share article on X"
        data-testid="share-x"
        onclick={shareOnX}
      >
        <svg viewBox="0 0 30 30" aria-hidden="true" focusable="false">
          <path
            d="M17.923 14.387 25.569 5.5h-1.812l-6.64 7.717L11.817 5.5H5.7l8.018 11.67L5.7 26.49h1.812l7.01-8.15 5.6 8.15h6.116l-8.316-12.102Zm-2.482 2.885-.812-1.162-6.464-9.246h2.783l5.216 7.462.813 1.162 6.78 9.7h-2.782l-5.534-7.915Z"
          />
        </svg>
      </button>

      <button
        type="button"
        class="icon-button"
        aria-label="Share article on Facebook"
        data-testid="share-facebook"
        onclick={shareOnFacebook}
      >
        <svg viewBox="6 6 20 20" aria-hidden="true" focusable="false">
          <path
            d="M16 6.04001C10.5 6.04001 6 10.53 6 16.06C6 21.06 9.66 25.21 14.44 25.96V18.96H11.9V16.06H14.44V13.85C14.44 11.34 15.93 9.96001 18.22 9.96001C19.31 9.96001 20.45 10.15 20.45 10.15V12.62H19.19C17.95 12.62 17.56 13.39 17.56 14.18V16.06H20.34L19.89 18.96H17.56V25.96C19.9164 25.5879 22.0622 24.3855 23.6099 22.5701C25.1576 20.7546 26.0054 18.4457 26 16.06C26 10.53 21.5 6.04001 16 6.04001Z"
          />
        </svg>
      </button>

      <button
        type="button"
        class="icon-button"
        aria-label="Share article on LinkedIn"
        data-testid="share-linkedin"
        onclick={shareOnLinkedIn}
      >
        <svg viewBox="0 0 21 21" aria-hidden="true" focusable="false">
          <path
            d="M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z"
          />
        </svg>
      </button>

      <button
        type="button"
        class="icon-button"
        aria-label="Email article"
        data-testid="share-email"
        onclick={shareViaEmail}
      >
        <svg viewBox="0 0 21 18" aria-hidden="true" focusable="false">
          <path
            d="M20.125 9c.449 0 .819.347.87.795L21 9.9v5.4c0 1.438-1.093 2.613-2.47 2.695l-.155.005H2.625c-1.398 0-2.54-1.124-2.62-2.541L0 15.3V9.9c0-.497.392-.9.875-.9.449 0 .819.347.87.795l.005.105v5.4c0 .462.338.842.773.894l.102.006h15.75a.884.884 0 0 0 .87-.795l.005-.105V9.9c0-.497.392-.9.875-.9Zm-1.75-9C19.825 0 21 1.209 21 2.7v2.7c0 .33-.175.632-.456.79l-9.625 5.4a.854.854 0 0 1-.838 0L.456 6.19A.904.904 0 0 1 0 5.4V2.7C0 1.209 1.175 0 2.625 0h15.75Zm0 1.8H2.625a.888.888 0 0 0-.875.9v2.166l8.75 4.909 8.75-4.91V2.7a.892.892 0 0 0-.773-.894l-.102-.006Z"
          />
        </svg>
      </button>

      <span class="icon-button-wrap">
        <button
          type="button"
          class="icon-button"
          aria-label="Copy link"
          data-testid="share-link"
          onclick={copyLink}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              d="M14.47 1.458a4.163 4.163 0 0 0-5.901 0l-1.28 1.209a.688.688 0 0 0 0 .995c.284.285.71.285.995 0l1.21-1.209a2.878 2.878 0 0 1 3.982 0c1.138 1.067 1.137 2.916.07 3.983l-2.133 2.133-.284.284c-1.28.925-3.058.711-3.982-.569-.214-.284-.711-.355-.996-.142-.285.213-.356.71-.142.996a4.242 4.242 0 0 0 3.413 1.706c.853 0 1.777-.284 2.56-.853.142-.142.284-.284.497-.427l2.134-2.133c1.636-1.636 1.564-4.41-.143-5.973Z"
            />
            <path
              d="m7.644 12.338-1.209 1.209a2.878 2.878 0 0 1-3.982 0c-1.138-1.067-1.138-2.916-.071-3.983l2.133-2.133.284-.284c.64-.427 1.351-.64 2.134-.57.782.143 1.422.498 1.849 1.138.213.284.71.356.996.143.284-.214.355-.711.142-.996-.71-.924-1.707-1.493-2.773-1.636-1.067-.213-2.205.071-3.13.783l-.426.426L1.458 8.57c-1.636 1.706-1.565 4.409.07 6.044.854.782 1.92 1.209 2.987 1.209 1.067 0 2.134-.427 2.987-1.21l1.209-1.208a.688.688 0 0 0 0-.996c-.284-.285-.782-.356-1.067-.07Z"
            />
          </svg>
        </button>
        {#if copied}
          <span class="tooltip" aria-hidden="true">Link copied</span>
        {/if}
        <span class="visually-hidden" role="status" aria-live="polite">
          {copied ? 'Copied to clipboard' : ''}
        </span>
      </span>
    </div>

    {#if showLicensing}
      <a
        class="licensing"
        href={licensingUrl}
        target="_blank"
        rel="noopener noreferrer"
        dir="ltr"
        data-testid="licensing-link"
      >
        Purchase Licensing Rights
      </a>
    {/if}
  </div>
</Block>

<style lang="scss">
  .share-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .share-buttons {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .icon-button-wrap {
    position: relative;
    display: inline-flex;
  }

  .icon-button {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    border-radius: 4px;
    background: var(--theme-colour-background, #fff);
    color: var(--theme-colour-text-secondary, #666);
    cursor: pointer;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }

  .icon-button:hover,
  .icon-button:focus-visible {
    color: var(--theme-colour-text-primary, #121212);
    border-color: var(--theme-colour-text-secondary, #666);
    background: rgb(0 0 0 / 3%);
  }

  .icon-button svg {
    display: block;
    width: 1.125rem;
    height: 1.125rem;
    fill: currentColor;
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 0.375rem);
    left: 50%;
    transform: translateX(-50%);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background: var(--theme-colour-text-primary, #121212);
    color: var(--theme-colour-background, #fff);
    font-size: 0.75rem;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: var(--theme-colour-text-primary, #121212);
  }

  .licensing {
    display: inline-flex;
    align-items: center;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid var(--theme-colour-brand-rules, #d3d3d3);
    border-radius: 4px;
    background: var(--theme-colour-background, #fff);
    color: var(--theme-colour-text-secondary, #666);
    font-size: 0.875rem;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }

  .licensing:hover,
  .licensing:focus-visible {
    color: var(--theme-colour-text-primary, #121212);
    border-color: var(--theme-colour-text-secondary, #666);
    background: rgb(0 0 0 / 3%);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 767px) {
    .share-bar {
      align-items: flex-start;
    }
  }
</style>
