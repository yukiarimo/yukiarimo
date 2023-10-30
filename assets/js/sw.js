// sw.js
const CACHE_NAME = 'my-pwa-cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    '/',
                    '/assets/css/index.js',
                    '/assets/js/sw.js',
                    '/assets/img/yukiarimo.jpeg',
                    '/assets/img/yukiarimo.png',
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
