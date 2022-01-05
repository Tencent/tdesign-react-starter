const { createProxyMiddleware } = require('http-proxy-middleware');

const mode = process.env.MODE;
const mockerHost = 'http://localhost:8889/';
const serverHost = 'http://localhost:8899/';

let proxyHost = '';
if (mode === 'mock') {
  proxyHost = mockerHost;
} else if (mode === 'dev') {
  proxyHost = serverHost;
}

module.exports = function (app) {
  app.use(
    '/api/**',
    createProxyMiddleware({
      target: proxyHost,
      changeOrigin: true,
    }),
  );
};
