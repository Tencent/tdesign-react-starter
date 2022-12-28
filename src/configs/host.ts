export default {
  mock: {
    // 本地mock数据
    API: '',
  },
  development: {
    // 开发环境接口请求
    API: 'https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com',
  },
  test: {
    // 测试环境接口地址
    API: 'https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com',
  },
  release: {
    // 正式环境接口地址
    API: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com',
  },
  site: {
    // TDesign部署特殊需要 与release功能一致
    API: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com',
  },
};
