const state = {
  name: '沈萌萌-刘慧'
}

const mutations = {
  turn (state,payload) {
    state.name = payload
  }
}

const getters = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}