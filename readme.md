# Proxied Fetch

Bypass CORS limitations by simply proxy-ing requests


### Installation

```
// CommonJS (NODE)
var proxiedFetch = require('proxied-fetch');

// ES6 Modules
import proxiedFetch from ('proxied-fetch');

// Browser
window.proxedFetch('http://your-end-point.com')
```

### Using

Just use it in the same way as `fetch` API

```

proxiedFetch('http://your-end-point.com')
    .then(res => res.json)
    .then(data => console.log(data))

```