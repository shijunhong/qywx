import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import 'assets/styles/reset.css'
import 'assets/styles/reset_mintui.css'
import './utils/extend'

// sessionStorage.setItem('login', {
//   expires_in: '86400',
//   refresh_token: 'vvvJYnHP2lGZSIM4WDWxzWxFgZoqIovuahkoWdvt',
//   access_token: 'LFdd2T6eTVsWfLMcYP65ld3An4ldZCPJWpvjNRQ2'
// })
// sessionStorage.setItem('access_token', 'LFdd2T6eTVsWfLMcYP65ld3An4ldZCPJWpvjNRQ2')

Vue.prototype.$wx = window.wx
Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')