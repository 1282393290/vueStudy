import Vue from 'vue'
import App from './App.vue'
import router from './myrouter'
import '../public/mockdata'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
