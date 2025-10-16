const CACHE = 'promolov-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => {
    return cache.addAll(['/', '/index.html', '/icon-192.png']);
  }));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
