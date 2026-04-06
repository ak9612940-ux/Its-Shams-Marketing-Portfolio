import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Project root directory
  root: './',
  
  // Base public path when served in development or production
  base: '/',

  // Directory to serve as plain static assets
  publicDir: 'public',

  resolve: {
    alias: {
      // Allows using '@' as a shortcut for the 'src' directory
      '@': resolve(__dirname, './src'),
    },
  },

  server: {
    // Port to run the dev server
    port: 3000,
    // Open the browser automatically on start
    open: true,
    // Enable CORS for API integrations
    cors: true,
  },

  build: {
    // Output directory for the production build
    outDir: 'dist',
    // Generate sourcemaps for debugging production code
    sourcemap: true,
    // Clean the output directory before building
    emptyOutDir: true,
    // Rollup specific options
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        // Keeps vendor libraries in a separate chunk for better caching
        manualChunks: {
          vendor: ['aos'],
        },
      },
    },
    // Minification strategy
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // CSS Options
  css: {
    devSourcemap: true,
  },
});
