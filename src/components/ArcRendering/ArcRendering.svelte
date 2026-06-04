<!-- @component
  `ArcRendering` configures how a page is rendered when published on reuters.com.

  It sets a render-mode context for child components and injects a JSON-LD
  `<script>` tag into the document head with metadata that Arc XP reads to
  determine how to wrap, paywall and monetise the page.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-furniture-arcrendering--docs)
-->
<script lang="ts">
  import { setContext } from 'svelte';

  interface Props {
    /**
     * Whether to wrap the page in the reuters.com shell (site header,
     * navigation and footer). When `false`, the page renders without the
     * shell — useful for standalone embeds or legacy graphics.
     * @default true
     */
    shell?: boolean;
    /**
     * Whether the page's content sits behind the Reuters paywall. When
     * `true`, the page is flagged as not accessible for free in the
     * JSON-LD metadata.
     * @default false
     */
    paywall?: boolean;
    /**
     * Whether to display the leaderboard ad at the top of the page. Set
     * to `false` to suppress the leaderboard ad on this page.
     * @default true
     */
    leaderboardAd?: boolean;
    /**
     * Page content rendered inside this component.
     */
    children?: import('svelte').Snippet;
  }

  let {
    shell = true,
    paywall = false,
    leaderboardAd = true,
    children,
  }: Props = $props();

  // Expose the active render mode to descendant components via Svelte
  // context, so they can adapt their behaviour when rendered inside the
  // reuters.com shell vs. standalone.
  setContext('arcxp:renderMode', () => (shell ? 'reuters' : ''));

  // JSON-LD payload consumed by Arc XP to control page-level rendering
  // behaviour: which shell to use, paywall status and ad suppression.
  let arcLdJson = $derived({
    'arcxp:renderMode': shell ? 'reuters' : '',
    isAccessibleForFree: !paywall,
    'arcxp:noLeaderboardAd': !leaderboardAd,
  });
</script>

<svelte:head>
  <!-- Inject Arc XP render-configuration metadata into the document head.
       The `script` tag is split to prevent Svelte from parsing it as a
       real script element during SSR. -->
  <!-- svelte-ignore hydration_html_changed -->
  {@html `<${'script'} type="application/ld+json">${JSON.stringify(arcLdJson)}</script>`}
</svelte:head>

{@render children?.()}
