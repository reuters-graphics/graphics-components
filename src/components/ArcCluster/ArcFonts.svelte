<!--
  @component `ArcFonts` loads the version of the Reuters Knowledge font that
  Reuters.com uses (regular, medium and bold). Reuters.com uses a different cut
  of Knowledge than the one that ships with our standard graphics kit, so to make
  an embed match the homepage we load that version here and register it under its
  own name, `ArcKnowledge`, so it sits alongside the kit's standard Knowledge
  font instead of replacing it. The files are served from the Reuters graphics
  CDN because the copies on Reuters.com can't be loaded by other websites — they
  are missing the cross-origin header a browser needs before it will use a font
  from another domain. Render it once near the root of an embed layout.
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
