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
  }
})
