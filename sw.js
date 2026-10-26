const CACHE_NAME = 'ntx-v24';
const urlsToCache = [
  '/',
  '/index.html?v=24',
  '/manifest.json?v=24',
  '/favicon.ico',
  '/icon/favicon-16x16.png?v=24',
  '/icon/favicon-32x32.png?v=24',
  '/icon/apple-touch-icon.png?v=24',
  '/icon/icon-72x72.png?v=24',
  '/icon/icon-96x96.png?v=24',
  '/icon/icon-128x128.png?v=24',
  '/icon/icon-144x144.png?v=24',
  '/icon/icon-152x152.png?v=24',
  '/icon/icon-192x192.png?v=24',
  '/icon/icon-384x384.png?v=24',
  '/icon/icon-512x512.png?v=24',
  '/icon/maskable-192x192.png?v=24',
  '/icon/maskable-512x512.png?v=24',
  '/icon/banner-ntx.png?v=24'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))) });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))) });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ns => Promise.all(ns.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))) });
