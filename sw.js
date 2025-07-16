const CACHE_NAME = 'jeeba-btp-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://rsms.me/inter/inter.css',
  'https://unpkg.com/lucide@latest/dist/umd/lucide.js',
  'https://i.postimg.cc/xqNF9GMT/logo-jeeba.png',
  'https://i.ibb.co/pX5YQjJc/hero-chantier.jpg',
  'https://i.ibb.co/d1Q4Sgqj/a-propos-equipe-2.jpg',
  'https://i.ibb.co/yWp4F0H/projet-btp-2.jpg',
  'https://i.ibb.co/8c8zLg8G/projet-hydraulique-2.jpg',
  'https://i.ibb.co/W4N7YyF2/projet-topo-2.jpg',
  'https://i.ibb.co/k5yZ7BQq/projet-electricite-2.jpg',
  'https://i.ibb.co/L8pQzJk5/projet-sig-2.jpg',
  'https://i.ibb.co/k1zZ62N/projet-formation-2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
