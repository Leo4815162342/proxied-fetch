# Proxied Fetch

[![NpmVersion](https://img.shields.io/npm/v/proxied-fetch.svg)](https://www.npmjs.com/package/proxied-fetch)

`Proxied Fetch` is a tiny Fetch API wrapper with 0 dependencies that lets you bypass [CORS limitations](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) by simply proxy-ing your requests through known CORS proxy services.

Tired of seeing these error messages after requesting content from domains with different origin?

`Failed to load http://your-end-point.com: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://different-domain.com' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

Struggle no more, and make CORS-free requests to any page/endpoint from any domain with `Proxied Fetch` package.

### Install

Using NPM:

```bash
$ npm install proxied-fetch
```

Via CDN:

```
https://unpkg.com/proxied-fetch@latest/dist/bundle.umd.js
```

### Using in browser

Use in the same way as `fetch` API. A `Promise` will be returned.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script src="https://unpkg.com/proxied-fetch@latest/dist/bundle.umd.js"></script>
    <script>
        proxiedFetch('https://xkcd.com/info.0.json')
            .then(res => res.json())
            .then(data => console.log(data));
    </script>
</body>
</html>

```

### Using with require/import for module systems (AMD/CommonJS/ES6)

```javascript

// ES6 Modules
import proxiedFetch from 'proxied-fetch';

// CommonJS
var proxiedFetch = require('proxied-fetch');

// AMD
require(['proxied-fetch'], function(proxiedFetch){  });

```

### fetch vs proxiedFetch

#### fetch:

![ajax request with fetch API](https://raw.githubusercontent.com/Leo4815162342/proxied-fetch/master/fetch.gif)

#### proxiedFetch:

![ajax request with proxiedFetch](https://raw.githubusercontent.com/Leo4815162342/proxied-fetch/master/proxiedFetch.gif)


### Using custom Proxies

If you want to use your own proxies, `proxiedFetch` accepts a list of custom proxy urls as a second optional parameter:

```javascript

var myProxies = ['https://thingproxy.freeboard.io/fetch/', 'https://cors.io/?'];

proxiedFetch('https://xkcd.com/info.0.json', myProxies)
    .then(res => res.json())
    .then(data => console.log(data));

```