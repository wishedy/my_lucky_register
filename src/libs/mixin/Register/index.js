import Vue from 'vue'
import myLogin from './index.vue'
import store from '@/store/index.js'
const LoginConstructor = Vue.extend(myLogin)
let newInstance = null
const theLogin = function (content) {
  console.log('1',newInstance)
  return new Promise((resolve, reject) => {
    if (!newInstance) {
      newInstance = new LoginConstructor({
        store,
        el: document.createElement('div')
      })
      document.body.appendChild(newInstance.$el)
    }
    console.log('走做')
    newInstance.success = function (data) {
      resolve(data)
      if (newInstance) {
        newInstance.shareVisible = false
      }
      newInstance = null
    }
    newInstance.fail = function (err) {
      reject(err)
      console.log('----', newInstance)
      if (newInstance) {
        newInstance.shareVisible = false
      }
      newInstance = null
    }
  })
}
Vue.prototype.$login = theLogin
export default theLogin
