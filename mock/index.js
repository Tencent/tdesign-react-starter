const delay = require('mocker-api/lib/delay');

// 根据环境变量判断是否需要开启代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {};

module.exports = noProxy ? {} : delay(proxy, 600);
