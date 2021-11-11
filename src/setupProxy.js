const proxy = require('http-proxy-middleware');

// 来自于webpack-api-mocker提供的服务
const mode = process.env.MODE;
const mockerHost = 'http://localhost:8889/';
const serverHost = 'http://localhost:8899/';

let proxyHost = '';
if (mode === 'mock') {
  proxyHost = mockerHost;
} else if (mode === 'dev') {
  proxyHost = serverHost;
}

// 根据实际情况代理请求到不同的api域名下
module.exports = (app) => {
  // 以下走mock 或者
  app.use(proxy('/api/**', { target: proxyHost, changeOrigin: true }));
  // 如有需要，可继续定义其他匹配规则
};
