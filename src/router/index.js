import { tokenKey } from '@/libs/constant'
import Cookies from 'js-cookie'
import router from './router.js'
const setTitle = (obj) => {
  document.title = obj.meta.title+'关东臻品'
}
// 针对活动页添加的神策公共属性
router.beforeEach((to, from, next) => {
  const token = Cookies.get(tokenKey)
  if (token ) {
    next()
  } else {
    if (to.matched.some(record => record.meta.auth)) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }else {
      next()
    }
  }
})
// 添加谷歌统计
router.afterEach(route => {
  setTitle(route)
})
export default router
