import Vue from 'vue'
import Router from 'vue-router'
import Love from '@/components/love'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/love',
      name: 'love',
      component: Love
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})