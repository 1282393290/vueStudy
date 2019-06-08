import Vue from 'vue'
import App from './App.vue'
//import router from './myrouter'
//import '../public/mockdata'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  render: h => h(App)
}).$mount('#app')
