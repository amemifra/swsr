
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
      
        <title>Swsr • ${value.split('').map((x,i) => i == 0 ? x.toUpperCase() : x).join('')}</title>
      
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
