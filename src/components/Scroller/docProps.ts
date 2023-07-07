import type { ComponentType } from 'svelte';

interface BlockStep {
  AltText?: string;
  Background: string;
  Text: string;
}

interface Block {
  Type: string;
  Width: string;
  Preload?: string;
  ForegroundPosition: string;
  StackBackground?: string;
  EmbeddedLayout?: string;
  ID?: string;
  Steps: BlockStep[],
}

interface AiCharts {
  [key: string]: ComponentType,
}

export const getScrollerPropsFromDoc = (docBlock: Block, aiCharts: AiCharts, assetsPath: string = '') => {
  return {
    id: docBlock.ID,
    backgroundWidth: docBlock.Width,
    foregroundPosition: docBlock.ForegroundPosition,
    stackBackground: docBlock.StackBackground === 'true' || !docBlock.StackBackground,
    embeddedLayout: docBlock.EmbeddedLayout,
    preload: docBlock.Preload ? parseInt(docBlock.Preload) || 1 : 1,
    steps: docBlock.Steps.map((step) => ({
      background: aiCharts[step.Background],
      backgroundProps: { assetsPath },
      foreground: step.Text,
      altText: step.AltText,
    })),
  };
};
