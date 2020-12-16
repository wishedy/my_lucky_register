const path = require('path')
// const isDev = process.env.NODE_ENV = 'development'
const isProd = process.env.NODE_ENV === 'production'
const fs = require('fs')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const chainWebpack = (config) => {
  config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        options.emitWarning = true
        return options
      })
}
module.exports = {
  lintOnSave: !isProd,
  assetsDir: 'static',
  transpileDependencies:  ['swiper'],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 8'
            ],
            grid: true
          }),
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',                  // 需要转换的单位，默认为px
            viewportWidth: 750,                  // 设计稿的视口宽度（根据实际项目决定 一般是 750）
            unitPrecision: 5,                    // 单位转换后保留的小数位数
            propList: ['*'],                     // 要进行转换的属性列表,*表示匹配所有,!表示不转换
            viewportUnit: 'vw',                  // 转换后的视口单位
            fontViewportUnit: 'vw',              // 转换后字体使用的视口单位
            selectorBlackList: ['.ignore','.hairlines'],               // 不进行转换的css选择器，继续使用原有单位
            minPixelValue: 1,                    // 设置最小的转换数值
            mediaQuery: false,                   // 设置媒体查询里的单位是否需要转换单位
            replace: true,                       // 是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/],           // 忽略某些文件夹下的文件
            include: undefined,                  // 包含某些文件夹下的文件
            landscape: false,                    // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw',                 // 横屏时使用的单位
            landscapeWidth: 568                  // 横屏时使用的视口宽度
          })
        ]
      }
    }
  },
  configureWebpack: (config) => {
    /* base config */
    // 配置依赖
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.css', 'less'],
      alias: {
        '@': resolve('src'),
        'api': resolve('src/resource'),
        'style': resolve('src/assets/styles'),
        'img': resolve('src/assets/images'),
        'components': resolve('src/components'),
        'libs': resolve('src/libs'),
      }
    }
    // 配置external
    config.externals = {
      wx: 'wx'
    }
  },
  chainWebpack: chainWebpack,
  devServer: {
    hot: true,
    clientLogLevel: 'warning',
    overlay: {
      warnings: true,
      error: true
    },
    proxy: {
      '/api': {
        target: 'http://39.106.209.74:8099',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
