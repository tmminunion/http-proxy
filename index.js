const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;
const url = 'http://192.168.1.1:80'

const exampleProxy = createProxyMiddleware({
  target: url,
  changeOrigin: true, // needed for virtual hosted sites
});

// mount `exampleProxy` in web server
app.use('/', exampleProxy);
app.listen(port);
console.log(`berjalan di port ${port} akses di http://localhost:${port}`)