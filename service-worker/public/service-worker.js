importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

console.log('this is my custom service worker');

//Must be included
workbox.precaching.precacheAndRoute([{"revision":"aae10ae0aba1f18fa26b4a6c5253b138","url":"stylesheets/style.css"}]);

workbox.strategies.cacheFirst()
workbox.strategies.networkFirst()
workbox.strategies.staleWhileRevalidate()


