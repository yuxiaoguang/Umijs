import { defineConfig } from 'umi'
const CompressionPlugin = require("compression-webpack-plugin")

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      name: '首页',
      routes: [
        { exact: false, path: 'page1', component: 'page1', name:'页面1', iconName: 'SnippetsOutlined' },
        { exact: true, path: 'page2', component: 'page2', name:'页面2', iconName: 'HighlightOutlined' },
      ],
    },
  ],
  chainWebpack: function (config) {
    if(process.env.NODE_ENV === 'production'){
      //gzip压缩
      config
        .plugin('compression-webpack-plugin')
        .use(CompressionPlugin, [{
          test:/\.js$|\.html$|\.css$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }])
    }
  }
})
