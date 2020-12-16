<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { isWeiXin } from 'libs/utils'
import remoteLoad from 'libs/remoteLoad'
import TabBar from 'components/TabBar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  },
  created () {
    if (isWeiXin()) {
      remoteLoad('//res.wx.qq.com/open/js/jweixin-1.0.0.js')
    }
  }
}
</script>
