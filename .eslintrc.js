module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'eslint-config-tencent',
    'eslint-config-tencent/ts',
    'eslint-config-tencent/prettier',
  ],
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'react/display-name': 'off',
    // jsx 单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 关闭variable必须全部大写规则
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const'],
        format: null,
      },
    ],
    // 统一eslint prettier配置
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
