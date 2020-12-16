import Vue from 'vue'
import 'style/reset.scss'
import 'style/common.scss'
import App from './App.vue'
import MintUI, {
  Toast,
  MessageBox,
  Indicator
} from 'mint-ui'
import '@/assets/styles/reset-mint-ui.scss'
import '@/assets/styles/picker.scss'
import router from './router'
import store from './store/index'
import 'swiper/css/swiper.min.css'
import AwesomePicker from 'vue-awesome-picker'
import vConsole from 'vconsole'
import '@/libs/mixin/Register'
import { getOpenId } from 'libs/utils'
/*eslint-disable*/
new vConsole()
Vue.use(AwesomePicker)
Vue.config.productionTip = false
Vue.prototype.MessageBox = MessageBox
Vue.prototype.Toast = Toast
Vue.prototype.Indicator = Indicator
Vue.use(MintUI)
if(getOpenId()){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
