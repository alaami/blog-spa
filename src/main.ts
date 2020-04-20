import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'
import AuthService from '@/services/AuthService'

const plugin = {
  install () {
      Vue.prototype.$auth0 = new AuthService()
  }
}

Vue.use(plugin)
Vue.use(require('vue-moment'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
