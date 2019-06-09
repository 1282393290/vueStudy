import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "刘慧玲-沈萌"
  },
  getters: {
    one (state) {
      return state.name.split('-')[0]
    }
  },
  mutations: {
    cn (state, payload) {
      state.name = payload
    }
  }
})