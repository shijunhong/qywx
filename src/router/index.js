import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import whiteList from './whiteList'
// import wxconfig from 'utils/wxconfig'
/* eslint-disable */
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(whiteList.includes(to.path)){
    next()
    return
  } 
  if (!sessionStorage.getItem('access_token')) {
    if (to.path == '/login') {
      next()
      return
    }
    next({
      path: '/login',
      query: {
        redirect: to.fullPath //登录成功后进入上次点击的页面
      }
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  // wxconfig(['onMenuShareWechat'])
})
export default router