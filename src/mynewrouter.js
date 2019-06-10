import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'

Vue.use(Router)

const routes = [
  {
    path: '/test/:id',
    name: 'test',
    component: Test,
    props:true
  }
]

export default new Router({
  routes
})