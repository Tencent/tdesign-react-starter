const delay = require('mocker-api/lib/delay');
const todos = require('./api/todos');
const user = require('./api/user');
const auth = require('./api/leah');
const steps = require('./api/steps');
const report = require('./api/report');

// 根据环境变量判断是否需要开启代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
  ...todos,
  ...user,
  ...auth,
  ...steps,
  ...report,
};

module.exports = noProxy ? {} : delay(proxy, 600);
