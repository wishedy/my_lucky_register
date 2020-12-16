import Vue from 'vue'
import Router from 'vue-router'
// 首页相关
const Home = (resolve) => {
  import(/* webpackChunkName: 'Home' */'@/views/home/Home').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    // 首页 相关
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})

export default router
