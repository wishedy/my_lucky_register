import { getSignature } from 'api/index'
import wx from 'wx'
export default {
  methods: {
    async share () {
      const _this = this
      try {
        const config = await getSignature()

        if (config && !config.code) {
          wx.config(config)
          wx.ready(() => {
            _this.wxJsSdkConfig()
          })
          wx.error(function (err) {
            console.log('报错了')
            console.log(err)
          })
        }
      } catch (e) {
        console.log(e)
        return _this.Toast(e.message)
      }
    },
    wxJsSdkConfig () {
      // 分享到朋友圈
      wx.onMenuShareTimeline({
        title: this.title, // 分享标题
        link: this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: this.imgUrl, // 分享图标
        success: () => {
          this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享给朋友
      wx.onMenuShareAppMessage({
        title: this.title, // 分享标题
        desc: this.desc, // 分享描述
        link: this.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: this.imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: () => {
          this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到QQ
      wx.onMenuShareQQ({
        title: this.title, // 分享标题
        desc: this.desc, // 分享描述
        link: this.url, // 分享链接
        imgUrl: this.imgUrl, // 分享图标
        success: () => {
          this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
      // 分享到QQ空间
      wx.onMenuShareQZone({
        title: this.title, // 分享标题
        desc: this.desc, // 分享描述
        link: this.url, // 分享链接
        imgUrl: this.imgUrl, // 分享图标
        success: () => {
          this.$emit('share-success')
        },
        cancel: () => {
          // 用户取消分享后执行的回调函数
        }
      })
    }
  }
}
