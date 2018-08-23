import Vue from 'vue'
import Vuex from 'vuex'
import {
  Indicator
} from 'mint-ui'
import router from './router'
import {
  login,
  refreshToken
} from './api/base'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expiresData: new Date().getTime() / 1000 + 10000
  },
  mutations: {
    refreshExpires(state, expires) {
      state.expiresData = new Date().getTime() / 1000 + expires
    }
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
        commit('refreshExpires')
        sessionStorage.setItem('access_token', res.access_token)
        sessionStorage.setItem('login', res)
        // 登录成功跳转
        Indicator.close()
        router.push('/invite')
      })
    },
    refreshToken({
      commit
    }) {
      return new Promise((resolve) => {
        // eslint-disable-next-line
        const refresh_token = sessionStorage.getItem('login')?sessionStorage.getItem('login').refresh_token:null
        // eslint-disable-next-line
        if (refresh_token) {
          refreshToken(refresh_token).then(res => {
            if (res.status === 'T') {
              commit('refreshExpires')
              sessionStorage.setItem('access_token', res.access_token)
              sessionStorage.setItem('login', res)
              resolve()
            } else {
              sessionStorage.clear()
              router.push('/login')
            }
          })
        } else {
          router.push('/login')
        }
      })
    }
  }
})