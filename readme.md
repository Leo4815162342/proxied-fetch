# Proxied Fetch

Bypass CORS limitations by simply proxy-ing requests

Tired of seeing these error messages after requesting content from different domains?

`Failed to load http://your-end-point.com: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://different-domain.com' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

Struggle no more, and make CORS-free requests to any page/endpoint from any domain with `Proxied Fetch` package.

### Install

```bash

$ npm install proxied-fetch

```

### Require/import

```javascript

// ES6 Modules
import proxiedFetch from ('proxied-fetch');

// Browser
window.proxiedFetch('http://your-end-point.com')

// CommonJS (NODE)
var proxiedFetch = require('proxied-fetch');

// AMD
require(['proxied-fetch'], function(proxiedFetch){  });

```

### Use

Use in the same way as `fetch` API. A `Promise` will be returned.

```javascript

proxiedFetch('https://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => console.log(data))

```

### With fetch

![ajax request with fetch API](https://raw.githubusercontent.com/Leo4815162342/proxied-fetch/master/fetch.gif)

### With proxiedFetch

![ajax request with proxiedFetch](https://raw.githubusercontent.com/Leo4815162342/proxied-fetch/master/proxiedFetch.gif)