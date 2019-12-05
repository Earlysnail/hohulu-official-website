import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)


const state = {
}
const actions = {
}
const mutations = {
}
export default new Vuex.Store({
  modules: {
    login
  },
  state,
  actions,
  mutations
})