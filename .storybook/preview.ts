import '../src/scss/main.scss';
import './preview.scss';

import { SyntaxHighlighter } from '@storybook/components';
import Wrapper from './Wrapper.svelte';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelte from './svelte-highlighting.js';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('svelte', svelte);
SyntaxHighlighter.registerLanguage('markdown', markdown);

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
          'Getting help',
        ],
        'Layout',
        ['Intro', '*'],
        'Theming',
        ['Theme', '*'],
        'Components',
        ['Intro', '*'],
        '*',
        'Utilities',
        ['Intro', '*'],
        'SCSS',
        ['Intro', '*'],
        'Styles',
        [
          'Intro',
          'Colours', [
            'Intro',
            'Primary',
            'Thematic',
            '*',
          ],
          'Tokens', [
            'Intro',
            'Typography',
            '*',
          ],
        ],
        'Actions',
        ['Intro', '*'],
        'Contributing',
        [
          'Quickstart', 'Component Basics', '*', 'Writing Stories',
          'Recipes: Basic story',
          'Recipes: Story with custom docs',
          'Recipes: Story with custom controls',
          'Recipes: Story with media',
          'Recipes: Story for a component with slots',
          'Writing docs pages',
        ],
      ],
    },
  }
};

export const decorators = [() => Wrapper];
