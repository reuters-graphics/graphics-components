import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    'storybook-addon-rtl',
    '@storybook/addon-docs'
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
