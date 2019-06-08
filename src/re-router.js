import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import Detail from '@/components/detail'

Vue.use(Router)

// const routes = [
//   {
//     path: '/one',
//     name: 'one',
//     component: One
//   },
//   {
//     path: '/two',
//     name: 'two',
//     component: Two
//   },
//   {
//     path: '/detail/:id',
//     name: 'detail',
//     component: Detail
//   }
// ]

export default new Router({
  routes
})