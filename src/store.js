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
        refreshExpires(res.expires_in)
        sessionStorage.setItem('access_token', res.access_token)
        sessionStorage.setItem('refresh_token', res.refresh_token)
        // 登录成功跳转
        Indicator.close()
        router.push('/invite')
      })
    }
  }
})