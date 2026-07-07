import { defineConfig, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = defineConfig({
  css: {
    preprocessorOptions: { scss: { quietDeps: true } },
  },
  plugins: [sveltekit()],
});

export default config;
