import path from 'path';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@token': path.resolve(__dirname, './src/token'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@type': path.resolve(__dirname, './src/type'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
