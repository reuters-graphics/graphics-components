import { defineConfig, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';

const config: UserConfig = defineConfig({
  css: {
    preprocessorOptions: { scss: { quietDeps: true } },
  },
  plugins: [sveltekit()],
  test: {
    // Vitest v4's default exclude no longer covers `dist/`, so a built
    // package would otherwise re-run every test against its compiled copy.
    exclude: [...configDefaults.exclude, 'dist/**', '.svelte-kit/**'],
  },
});

export default config;
