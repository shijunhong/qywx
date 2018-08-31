import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import 'assets/styles/reset.css'
import 'assets/styles/reset_mintui.css'
import './utils/extend'
import VueClipboard from 'vue-clipboard2'
// 打包记得注释掉
// import {
//   refreshExpires
// } from 'utils/refreshToken'
// 打包记得注释掉
// sessionStorage.setItem('refresh_token', 'x9witb0uHSF3qBVFiNhwpEXhevDjifRpo43q1t2o')
// sessionStorage.setItem('access_token', 'xylhx1AJwEwXXhKOzT3Efwgd7IY47YRluBCKi1yy')
// refreshExpires('86400')

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.prototype.$wx = window.wx
Vue.config.productionTip = false
Vue.use(MintUI)

export default new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')