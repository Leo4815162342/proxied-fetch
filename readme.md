# Proxied Fetch

Bypass CORS limitations by simply proxy-ing requests

Tired of seeing these error messages after requesting content from different domains?

`Failed to load http://your-end-point.com: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://different-domain.com' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

Struggle no more, and make CORS free requests to any page/endpoint from any domain with `Proxied Fetch` package.

### Installation

```bash

npm install proxied-fetch

```

### Require/import

```javascript

// CommonJS (NODE)
var proxiedFetch = require('proxied-fetch');

// ES6 Modules
import proxiedFetch from ('proxied-fetch');

// Browser
window.proxiedFetch('http://your-end-point.com')


```

### Using

Use in the same way as `fetch` API

```javascript

proxiedFetch('http://your-end-point.com')
    .then(res => res.json)
    .then(data => console.log(data))

```