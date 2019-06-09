import Vue from 'vue'
//import App from './App.vue'
//import router from './myrouter'
//import '../public/mockdata'
// import router from '@/re-router'
//import Home from './Home.vue'
import Home from './vuexStart.vue'
import router from '@/vuexStart.js'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
