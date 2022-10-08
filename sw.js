self.addEventListener('install', () => {
  console.log('[Service Worker] Installing service worker');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('[Service Worker] Activating service worker!');
  return self.clients.claim();
});
