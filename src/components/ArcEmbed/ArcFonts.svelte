<!--
  @component `ArcFonts` loads the Reuters Knowledge web font (regular, medium and
  bold) from the Reuters graphics CDN and registers it under the `ArcKnowledge`
  family so an `ArcEmbed` matches the site's typography without colliding with
  any `Knowledge` font already on the host page. The files are mirrored to the
  graphics bucket because the canonical reuters.com copies are served without a
  cross-origin (CORS) header, which browsers require for `@font-face`. Render it
  once near the root of an embed layout.
-->
<svelte:head>
  {@html `<style>
    @font-face {
      font-family: 'ArcKnowledge';
      src: url('https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'ArcKnowledge';
      src: url('https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-medium.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'ArcKnowledge';
      src: url('https://graphics.thomsonreuters.com/arc-assets/fonts/knowledge-arc/knowledge-bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  </style>`}
</svelte:head>
