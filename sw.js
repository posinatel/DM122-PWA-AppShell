self.addEventListener('install', () => {
  console.log('[Service Worker] Installing service worker');
  self.skipWaiting();
});
