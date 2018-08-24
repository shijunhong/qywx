import Vue from 'vue'
import Vuex from 'vuex'
import {
  Indicator
} from 'mint-ui'
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
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      login(code).then((res) => {
        console.log(res)
        if (res.data.status === 'F') {
          Indicator.close()
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
        refreshExpires(res.data.expires_in)
        sessionStorage.setItem('access_token', res.data.access_token)
        sessionStorage.setItem('refresh_token', res.data.refresh_token)
        // 登录成功跳转
        Indicator.close()
        router.push('/invite')
      })
    }
  }
})