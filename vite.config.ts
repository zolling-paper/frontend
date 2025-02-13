import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@token': path.resolve(__dirname, './src/token'),
      '@type': path.resolve(__dirname, './src/type'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
