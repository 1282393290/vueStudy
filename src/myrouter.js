import Vue from 'vue'
import Router from 'vue-router'
import Todo from './router/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Todo
    }
  ]
})
