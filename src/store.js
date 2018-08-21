import Vue from 'vue'
import Vuex from 'vuex'
import {
  Indicator
} from 'mint-ui'
import router from './router'
import { login } from './api/base'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    login() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      login();
      sessionStorage.setItem('token', '')
      setTimeout(() => {
        Indicator.close()
        router.push('/invite')
      }, 0)
    }
  }
})