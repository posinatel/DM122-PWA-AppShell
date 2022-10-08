self.addEventListener("install", () => {
  console.log("[Service Worker] Installing service worker");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("[Service Worker] Activating service worker!");
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetch event worker!", event.request.url);
  event.respondWith(fetch(event.request.url));
});
