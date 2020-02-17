
const assets = [
  '/global.css',
  '/components/header.js',
  '/components/header.css',
  '/components/home.js',
  '/components/home.css',
  '/components/404.js',
  '/components/404.css',
  '/components/clone.js',
  '/components/clone.css',
  '/favicon.png'
]

const routes = ['/', '/clone']

self.addEventListener('install', function(event) {
    caches.open('v1').then(function(cache) {
      return cache.addAll(assets);
    })
});

self.addEventListener('fetch', function(event) {
    if (event.request.mode === 'navigate') {
      const txt = event.request.url.substr(event.request.url.lastIndexOf('/'))
      const value = routes.some(r => r == txt) 
      ? txt == '/' ? 'home' : txt.substr(1)
      : '404'

      const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
      
        <title>Svelte ${value}</title>
      
        <link rel='icon' type='image/png' href='/favicon.png'>
        <link rel='stylesheet' href='/global.css'>
        <link rel='stylesheet' href='/components/header.css'>
        <link rel='stylesheet' href='/components/${value}.css'>
      
        <script defer src='/components/header.js'></script>
        <script defer src='/components/${value}.js'></script>
      </head>
      
      <body>
      </body>
      </html>
      `
      const headers = new Headers()
      headers.append("Content-Type", "text/html")
      const init = { "status" : 200 , "statusText": "OK", headers };
      const appShellResponse = new Response(html, init);
      
      event.respondWith(new Promise((resolve, reject) => { resolve(appShellResponse); reject()  } ))

    } else if (assets.some(str => str == getValue(event.request.url))) {
      event.respondWith(caches.match(getValue(event.request.url)))
    }
  });

  function getValue(str) {
    const first = str.substr(str.indexOf('/') + 1)
    const second = first.substr(first.indexOf('/') + 1)
    const value = second.substr(second.indexOf('/'))
    return value
  }




//   var CACHE = 'cache-and-update';

// // On install, cache some resources.
// self.addEventListener('install', function(evt) {
//   console.log('The service worker is being installed.');

//   // Ask the service worker to keep installing until the returning promise
//   // resolves.
//   evt.waitUntil(precache());
// });

// // On fetch, use cache but update the entry with the latest contents
// // from the server.
// self.addEventListener('fetch', function(evt) {
//   console.log('The service worker is serving the asset.');
//   // You can use `respondWith()` to answer immediately, without waiting for the
//   // network response to reach the service worker...
//   evt.respondWith(fromCache(evt.request));
//   // ...and `waitUntil()` to prevent the worker from being killed until the
//   // cache is updated.
//   evt.waitUntil(update(evt.request));
// });

// // Open a cache and use `addAll()` with an array of assets to add all of them
// // to the cache. Return a promise resolving when all the assets are added.
// function precache() {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.addAll([
//       './controlled.html',
//       './asset'
//     ]);
//   });
// }

// // Open the cache where the assets were stored and search for the requested
// // resource. Notice that in case of no matching, the promise still resolves
// // but it does with `undefined` as value.
// function fromCache(request) {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.match(request).then(function (matching) {
//       return matching || Promise.reject('no-match');
//     });
//   });
// }

// // Update consists in opening the cache, performing a network request and
// // storing the new response data.
// function update(request) {
//   return caches.open(CACHE).then(function (cache) {
//     return fetch(request).then(function (response) {
//       return cache.put(request, response);
//     });
//   });
// }
