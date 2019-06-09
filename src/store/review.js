import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '沈萌萌-刘慧玲'
  },
  getters: {
    first (state) {
      return state.name.split('-')[0]
    }
  },
  mutations: {
    born (state,payload) {
      state.name = payload
    }
  },
  actions: {
    //异步请求，请求的数据，通过commit提交给mutations中的born方法。之前是直接在组件中通过commit提交给mutations中的born，因为数据是死的。而mutations中不能做异步操作，
    //所以通过派发的方式来启动actions中的请求。最后通过actions中的context对象commit提交给mutations中。
    reborn (context) {
      context.commit('born',"泫雅-沈萌")
    }
  }
})
