import Vue from 'vue'
import 'style/reset.scss'
import 'style/common.scss'
import App from './App.vue'
import router from './router'
import 'swiper/css/swiper.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/*eslint-disable*/
Vue.config.productionTip = false
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
