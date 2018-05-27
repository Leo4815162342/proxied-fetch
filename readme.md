# Proxied Fetch

Bypass CORS limitations by simply proxy-ing requests


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