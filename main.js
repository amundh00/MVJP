import { createMenu } from './src/menu.js';  
createMenu();
const pages = {
  '/index.html': async () => {
    console.log('Home Page Loaded');
  },
  '/page1.html': async () => {
    const module = await import('./src/page1.js');  
    module.default();
  },
  '/page2.html': async () => {
    const module = await import('./src/page2.js'); 
    module.default();
  },
  // Add more pages if needed
};
const path = window.location.pathname;
if (pages[path]) {
  pages[path]();
} else {
  console.error('No script found for this page');
}

