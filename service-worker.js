self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('dbd-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/features.html',
        '/characters.html',
        '/map.html',
        '/manifest.json',
        '/style.css',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        // Добавь изображения:
        '/dbd_head.jpg',
        '/dbd_head3.png',
        '/avatar1.png',
        '/avatar2.png',
        '/avatar3.png',
        '/avatar4.png',
        '/killer1.png',
        '/killer2.png',
        '/killer3.png',
        '/killer4.png',
        '/killer5.png',
        '/killer6.png',
        '/killer7.png',
        '/surv1.png',
        '/surv2.png',
        '/surv3.png',
        '/surv4.png',
        '/surv5.png',
        '/surv6.png',
        '/surv7.png',
        '/surv8.png',
        '/kruk.jpg',
        '/lechenie.jpg',
        '/pogonia.jpg',
        '/killer_perks.png',
        '/pogonia.jpg',
        '/pogonia_surv.png',
        '/predmeti.png',
        '/suchnost.jpg',
        '/surv_perks.png',
        '/vorota.jpg', 

      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});