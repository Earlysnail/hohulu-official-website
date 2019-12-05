// import { login } from '../../api/login'

//state
const state = {
  userMessage: {},
  authState: true
}

//mutation-type
const SET_USER_MESSAGE = 'SET_USER_MESSAGE'
const SET_USER_MESSAGE_SUCCESS = 'SET_USER_MESSAGE_SUCCESS'
const SET_USER_MESSAGE_FILE = 'SET_USER_MESSAGE_FILE'

//getters
const getters = {
  getUserMessage(state, getters, rootState){
    return state.userMessage || rootState.userMessage || {username: '马文涛'}
  }
}


//actions
const actions = {
  login({ commit }, userMessage) {
    commit(SET_USER_MESSAGE, userMessage)
    // const res = login(userMessage)
    const res = {
      code: '0',
      msg: '调用成功',
      data: {}
    }
    if(res.code === '0'){
      commit(SET_USER_MESSAGE_SUCCESS)
    }else {
      commit(SET_USER_MESSAGE_FILE)
      console.log(res.msg)
    }
  }
}


// mutations
const mutations = {
  [SET_USER_MESSAGE]() {

  },
  [SET_USER_MESSAGE_SUCCESS](state, userMessage) {
    state.userMessage = userMessage
  },
  [SET_USER_MESSAGE_FILE](state) {
    console.log('调用失败',state)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}