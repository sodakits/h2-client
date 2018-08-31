# h2-client
[![Build Status](https://travis-ci.org/sodakits/h2-client.svg?branch=master)](https://travis-ci.org/sodakits/h2-client)

The simplest http/h2 restful API client for Node.

## Example
```javascript 1.8
const h2 = require('@sodakits/h2-client');

// Create h2 client
const client = h2.createClient({
  url: 'h2://apis.sodakits.io',
  baseHeaders: {
    'x-api-key': 'API-KEY-VALUE'
  }
});

// Call api
async function process() {
  const response = await client.call({
    method: 'GET',
    path: '/user/me',
    headers: {
      'authorization': 'Bearer token'
    }
  });
}
```

