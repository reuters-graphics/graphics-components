/** @type {Omit<import('../@types/component').Theme, "colour">} */
// Generated from https://www.fluid-type-scale.com/calculate?minFontSize=18&minWidth=320&minRatio=1.125&maxFontSize=22&maxWidth=1280&maxRatio=1.25&steps=xxs%2Cxs%2Csm%2Cbase%2Clg%2Cxl%2C2xl%2C3xl%2C4xl%2C5xl%2C6xl&baseStep=base&prefix=+fs&decimals=2&useRems=on&remValue=16&previewFont=Noto+Sans&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground&previewWidth=0
export default {
  font: {
    family: {
      serif: 'FreightText, serif',
      'sans-serif': 'Knowledge, sans-serif',
      monospace:
        '"Droid Sans Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      hed: 'var(--theme-font-family-sans-serif)',
      subhed: 'var(--theme-font-family-sans-serif)',
      body: 'var(--theme-font-family-serif)',
      note: 'var(--theme-font-family-sans-serif)',
    },
    size: {
      xxs: 'clamp(0.79rem, -0.14vw + 0.82rem, 0.7rem)',
      xs: 'clamp(0.89rem, -0.01vw + 0.89rem, 0.88rem)',
      sm: 'clamp(1rem, 0.17vw + 0.97rem, 1.1rem)',
      base: 'clamp(1.13rem, 0.42vw + 1.04rem, 1.38rem)',
      lg: 'clamp(1.27rem, 0.76vw + 1.11rem, 1.72rem)',
      xl: 'clamp(1.42rem, 1.21vw + 1.18rem, 2.15rem)',
      '2xl': 'clamp(1.6rem, 1.81vw + 1.24rem, 2.69rem)',
      '3xl': 'clamp(1.8rem, 2.59vw + 1.28rem, 3.36rem)',
      '4xl': 'clamp(2.03rem, 3.61vw + 1.3rem, 4.2rem)',
      '5xl': 'clamp(2.28rem, 4.94vw + 1.29rem, 5.25rem)',
      '6xl': 'clamp(2.57rem, 6.65vw + 1.24rem, 6.56rem)',
    },
  },
};
