const CACHE_NAME = "mi-control-fitness-v2";
const APP_SHELL = [
  "/My-Fitness/",
  "/My-Fitness/index.html",
  "/My-Fitness/manifest.webmanifest",
  "/My-Fitness/icons/icon-192.png",
  "/My-Fitness/icons/icon-512.png",
  "/My-Fitness/icons/icon-512-maskable.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith("mi-control-fitness-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    }).catch(() => caches.match(request).then(cached => cached || caches.match("/My-Fitness/index.html")))
  );
});
