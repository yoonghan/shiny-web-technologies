importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

console.log('this is my custom service worker');

//Must be included
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.strategies.cacheFirst()
workbox.strategies.networkFirst()
workbox.strategies.staleWhileRevalidate()


