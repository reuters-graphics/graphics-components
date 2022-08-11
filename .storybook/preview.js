import '../src/scss/main.scss';
import './preview.scss';

import Article from '../src/components/Article/Article.svelte';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelte from './svelte-highlighting.js';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('svelte', svelte);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|colour|Colour)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    // https://storybook.js.org/docs/svelte/writing-stories/naming-components-and-hierarchy#sorting-stories
    storySort: {
      includeNames: true,
      order: [
        'Intro',
        'Guides',
        [
          'Using these docs',
          'Using with the Graphics Kit',
          'Using with Google docs',
          'Customising components with SCSS',
          '*',
        ],
        '*',
        'Actions',
        ['*'],
        'Utilities',
        ['*'],
        'Contributing',
        [
          'Quickstart', 'Component Basics', '*', 'Writing Stories',
          'Recipes: Basic story',
          'Recipes: Story with custom docs',
          'Recipes: Story with custom controls',
          'Recipes: Story with media',
          'Recipes: Story for a component with slots'
        ],
      ],
    },
  }
};

export const decorators = [() => ({ Component: Article })];
