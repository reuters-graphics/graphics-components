<!-- @component Loads Reuters.com's cut of the Knowledge font (registered as ArcKnowledge) from the graphics CDN. Rendered automatically by ArcCluster. -->
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
