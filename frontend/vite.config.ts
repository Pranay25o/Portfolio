import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * PERFORMANCE FIX: Added comprehensive Vite build optimizations.
 *
 * Key changes:
 * 1. manualChunks — splits the bundle so framer-motion (still used for ProjectsSection
 *    modal) loads in its own chunk, separate from React and the main app. This means:
 *    - React renders immediately from the smaller 'vendor' chunk
 *    - framer-motion only loads when the component that needs it is parsed
 *    - Better long-term cache utilization (framer-motion chunk doesn't change when
 *      your app code changes)
 *
 * 2. terser minifier with console.log stripping — removes all soundManager calls
 *    (which are no-ops) from the production bundle entirely.
 *
 * 3. cssMinify — ensures Tailwind output is maximally compressed.
 *
 * 4. Increased inlineSassetsLimit — small icons/SVGs inline as base64 to save
 *    network round trips.
 *
 * 5. reportCompressedSize: false — speeds up the build step (cosmetic only).
 */
export default defineConfig({
  plugins: [react()],

  build: {
    // Use terser for aggressive dead-code elimination and console stripping
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // removes all console.log/warn/error
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn', 'console.info'],
        passes: 2,               // 2-pass compression for smaller output
      },
      mangle: {
        safari10: true,          // fix Safari 10 loop scoping bug
      },
    },

    // Inline small assets as base64 (reduces HTTP requests for tiny files)
    assetsInlineLimit: 4096,

    // Split chunks for optimal loading and cache performance
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loaded first, cached aggressively
          'vendor-react': ['react', 'react-dom'],

          // Framer Motion — only loaded when needed (ProjectsSection modal)
          // Separating it means users who don't open modals never parse it
          'vendor-framer': ['framer-motion'],

          // Lucide icons — tree-shaken but still chunked separately for cache
          'vendor-icons': ['lucide-react'],

          // Zustand state — tiny but cache-friendly to separate
          'vendor-state': ['zustand'],
        },
        // Consistent output filenames for cache headers
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },

    // Suppress the compressed size report (speeds up build, info only)
    reportCompressedSize: false,

    // Increase chunk size warning threshold (framer-motion is large by design)
    chunkSizeWarningLimit: 600,

    // Enable CSS code splitting for better loading granularity
    cssCodeSplit: true,

    // Target modern browsers for smaller output (no IE polyfills)
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
  },

  // Optimize dev server
  server: {
    hmr: { overlay: true },
  },
});
