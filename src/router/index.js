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

// 路由切换需要做的额外事情
function others(to,from){
   // 辅助tap组件的刷新
  if(sessionStorage.getItem('refresh') == 'true'){
    return
  }
  sessionStorage.removeItem('tap_index')
}

router.beforeEach((to, from, next) => {
  others(to,from)
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