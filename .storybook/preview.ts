import '../src/scss/main.scss';
import './preview.scss';

import { SyntaxHighlighter } from 'storybook/internal/components';
import Wrapper from './Wrapper.svelte';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelte from './svelte-highlighting.js';

import type { Preview } from '@storybook/sveltekit';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('svelte', svelte);
SyntaxHighlighter.registerLanguage('markdown', markdown);

const preview: Preview = {
  // @ts-ignore Is OK
  decorators: [
    // Wrap every story in Theme + Article. A story can switch the base theme by
    // setting a `theme: 'dark'` parameter (defaults to light).
    (_story, context) => ({
      Component: Wrapper,
      props: { base: context.parameters.theme === 'dark' ? 'dark' : 'light' },
    }),
  ],
  tags: ['autodocs', 'autodocs', 'autodocs', 'autodocs'],
  parameters: {
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
      // https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy#sorting-stories
      storySort: {
        method: 'alphabetical-by-kind',
        includeNames: false,
        order: [
          'Intro',
          'Guides',
          [
            'Using these docs',
            'Using with the graphics kit',
            'Using with ArchieML docs',
            'Customising components with SCSS',
            '*',
            'Getting help',
          ],
          'Components',
          ['*', ['Intro', '*']],
          'Compositions',
          ['Default page', '*'],
          'Styles',
          [
            'Intro',
            'Colours',
            ['Intro', 'Primary', 'Thematic', '*'],
            'Tokens',
            ['Intro', 'Typography', '*'],
          ],
          'Actions',
          ['Intro', '*'],
          'Contributing',
          ['Quickstart', 'Component Basics', 'Writing Stories', '*'],
        ],
      },
    },
  },
};

export default preview;
