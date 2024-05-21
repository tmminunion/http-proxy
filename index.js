const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://192.168.1.1:80';

const exampleProxy = createProxyMiddleware({
  target: url,
  changeOrigin: true, // needed for virtual hosted sites
});

// mount `exampleProxy` in web server
app.use('/', exampleProxy);
app.listen(port, () => {
  console.log(`Server running on port ${port}, proxying to ${url} ke halaman http://localhost:${ports}`);
});
