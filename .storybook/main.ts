import type { StorybookConfig } from '@storybook/sveltekit';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    'storybook-addon-rtl',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            // MDX ships CommonMark only, which has no table syntax — without
            // this a markdown table renders as a paragraph of literal pipes.
            // Worth having rather than hand-rolling `<table>`: the llm-docs
            // generator strips JSX nodes from MDX prose
            // (scripts/generate-llm-docs/extractors/mdx.ts), so an HTML table
            // is silently dropped from dist/llm-docs while a markdown one
            // passes straight through.
            //
            // Two gotchas when authoring tables in .mdx:
            //  - Escape pipes inside a cell as `\|`. GFM splits cells before it
            //    parses inline code, so an unescaped union type such as
            //    `Date | string` shears the row apart.
            //  - Don't put a `{/* … */}` comment immediately above a table.
            //    Prettier formats .mdx as markdown and rewrites the `*` as `_`,
            //    producing `{/_ … _/}`, which stops the next block rendering.
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  features: {
    // Hide the "Get started" onboarding checklist widget in the sidebar (dev only).
    sidebarOnboardingChecklist: false,
  },
};
export default config;
