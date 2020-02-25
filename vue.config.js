const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8081', 
      https: false,   //是否使用https协议
      hotOnly: false, //是否开启热更新
      proxy: {
          '/users':{
              target:'http://localhost:3000',
              changeOrigin:true, 
          },
          '/goods':{
              target:'http://localhost:3000',
              changeOrigin:true, 
          },
          
      },
  },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
    },
}
