import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import {
  login
} from './api/base'
import {
  refreshExpires
} from 'utils/refreshToken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    // eslint-disable-next-lin
    login({
      commit
    }, code) {
      login(code).then((res) => {
        if (res.status === 'F') {
          const msg = res.error.message
          if (msg.startWith('qywx_application_expried')) {
            // 跳转到应用过期页面
            router.push('/expire')
            return
          }

          if (msg.startWith('qywx_application_not_enable')) {
            // 跳转到应用过期页面
            router.push('/expire')
            return
          }
          // 跳转无权限页面
          router.push('/noauth')
          return
        }
        refreshExpires(res.expires_in)
        sessionStorage.setItem('access_token', res.access_token)
        sessionStorage.setItem('refresh_token', res.refresh_token)
        // 登录成功跳转
        router.replace('/invite')
      })
    }
  }
})