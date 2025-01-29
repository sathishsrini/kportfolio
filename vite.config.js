import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // Do not fail the build on ESLint errors
      failOnWarning: false, // Do not fail the build on ESLint warnings
    }),
  ],
});
