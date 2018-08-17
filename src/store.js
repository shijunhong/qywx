import Vue from 'vue'
import Vuex from 'vuex'
import {
  Indicator
} from 'mint-ui'

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
      sessionStorage.setItem('token', '')
      setTimeout(() => {
        Indicator.close()
      }, 0)
    }
  }
})