'use strict';
const PREFIX = 'scan2aid-' + self.registration.scope + '-';
const CACHE = PREFIX + 'v1';
const ASSETS = ['./index.html','./bisaya.html','./style.css','./app.js','./images/scissors.svg','./images/betadine.svg','./images/gauze.svg','./images/plaster.svg','./images/elastic.svg'];
const urls = new Set(ASSETS.map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  url.search = ''; url.hash = '';
  const key = url.href === self.registration.scope ? new URL('index.html', self.registration.scope).href : url.href;
  if (!urls.has(key)) return;
  event.respondWith(caches.open(CACHE).then(async cache => (await cache.match(key)) || fetch(event.request)));
});
