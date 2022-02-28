import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      configs: path.resolve(__dirname, './src/configs'),
      layouts: path.resolve(__dirname, './src/layouts'),
      modules: path.resolve(__dirname, './src/modules'),
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
      services: path.resolve(__dirname, './src/services'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 如需自定义组件其他 token, 在此处配置
        },
      },
    },
  },

  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),
  ],

  build: {
    cssCodeSplit: false,
  },

  server: {
    port: 3003,
    proxy: {
      '/api': {
        // 用于开发环境下的转发请求
        // 更多请参考：https://vitejs.dev/config/#server-proxy
        target: 'https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com',
        changeOrigin: true,
      },
    },
  },
});
