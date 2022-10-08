const staticCache = "app-shell-v1";

const assetsToCache = ["offline.html"];

async function cacheStaticAssets() {
  const cache = await caches.open(staticCache);
  return cache.addAll(assetsToCache);
}

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing service worker");
  event.waitUntil(cacheStaticAssets());
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
