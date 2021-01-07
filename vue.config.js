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
            ]
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
      '/crm': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/crm': '/crm'
        }
      },
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
