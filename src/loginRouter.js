import Vue from 'vue'
import Router from 'vue-router'
import Login from './router/login'
import Header from './components/header'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/header',
    name: 'header',
    component: Header,
    props: true
  },{
    path: '*',
    redirect: '/login'
  }
]

export default new Router({
  routes
})