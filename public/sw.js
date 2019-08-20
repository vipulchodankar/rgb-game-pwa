/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "e4d8167512f79ad6277d06be6a3c816f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "4c44426d1e8118f1d9b228e863337eb5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "d86106418e82497919c287b87cbfa11a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "f40f89ff9d2ca84bb5b6d71341fcbf4f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "ced5c5e069cc3731353f4e41f11082db"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "ab79daab9cdcdea608f57dae26ec85c6"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "2a5b12fa1fb69368335e798c843047c2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "edde36b6603d872451287106e4e19ccf"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "139936155149062c567c564025a0252a"
  },
  {
    "url": "index.html",
    "revision": "e6f0ce5849d7c1d79282b0961dbfb5fa"
  },
  {
    "url": "js/script.js",
    "revision": "9745bbc099515c4605d15b807b8f8eda"
  },
  {
    "url": "manifest.json",
    "revision": "abd745d13b5e3735034b3154a0996a96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
