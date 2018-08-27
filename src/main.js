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
import {
  refreshExpires
} from 'utils/refreshToken'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

sessionStorage.setItem('refresh_token', 'zTA1zGKY68Fgi5JRl6zGBICQNoNUXkqR2XVtOlAe')
sessionStorage.setItem('access_token', 'LRoYUwPx7Gzc5PHi0Sx72KyP2aaktZRVMRHwGXWm')
refreshExpires('86400')

Vue.prototype.$wx = window.wx
Vue.config.productionTip = false
Vue.use(MintUI)

export default new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')