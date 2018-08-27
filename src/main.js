import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import 'assets/styles/reset.css'
import 'assets/styles/reset_mintui.css'
import './utils/extend'
import {
  refreshExpires
} from 'utils/refreshToken'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

sessionStorage.setItem('refresh_token', 'c2dcsVboFV2XFjXJgQuFzQrGyf2m2I1nt2QKCEew')
sessionStorage.setItem('access_token', 'EryH3eT9opUbggy9S9nlQlxuFQdwuMLhP8O0xbs3')
refreshExpires('86400')

Vue.prototype.$wx = window.wx
Vue.config.productionTip = false
Vue.use(MintUI)

export default new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')