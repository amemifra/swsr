
# Service Worker Side Rendering

This is a project template for [SWSR](https://swsr.it) apps. It lives at https://github.com/amemifra/swsr.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit amemifra/swsr serviceworker-rendering
cd serviceworker-rendering
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd serviceworker-rendering
npm install
```

...then build with [Rollup](https://rollupjs.org):

```bash
npm run build
```

...then serve with [Sirv](https://www.npmjs.com/package/sirv):

```bash
npm start
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## How it works

SWSR is based on svelte component and vanilla javascript. It use [svelte](https://svelte.dev) as component compiler and a rendering based on vanilla javascript.

In index.html is instantiate into `navigator.serviceWorker` [render.js](https://github.com/amemifra/swsr/blob/master/public/render.js) the render engine of the application.

This solution code is a PoC of a render system based on service worker dynamic creation of http response (a PHP rendering idea into the sw).

When the render sw is installed it caches the static files of the svelte components compiled. On a navigate request it create JiT a html response with an html content based on the request url. It also checked each fetch function to retrurn cached files.
