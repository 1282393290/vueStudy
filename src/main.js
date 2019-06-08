import Vue from 'vue'
//import App from './App.vue'
//import router from './myrouter'
//import '../public/mockdata'
// import router from '@/re-router'
import Home from './Home.vue'
import router from '@/loginRouter'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
