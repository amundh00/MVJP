import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        page1: 'public/page1.html', // Additional pages in public/
        page2: 'public/page2.html',
        // Add more pages here
}, },
}, server: {
open: true,
    port: 5173,
  },
});