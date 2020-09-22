import { defineConfig } from 'umi';
import routes from './src/config/defineRoutes';
import proxy from './src/config/defineProxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': './src',
    '@api': './src/api',
    '@model': './src/model'
  },
  lessLoader: {
    modifyVars: {
      'hack': `true; @import "~@/assets/style/tools.less"; @import "~@/assets/style/val.less";`
    }
  },
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: true
  },
  antd: {},
  routes,
  proxy
});
