import { signIn } from '@/api/user'
import { setStore, removeStore, getStore, } from '@/utils/storage';
//state
const state = {
  userMessage: {},
  authState: true
}


//mutation-type
const SET_USER_MESSAGE = 'SET_USER_MESSAGE'
const SET_USER_MESSAGE_SUCCESS = 'SET_USER_MESSAGE_SUCCESS'
const SET_USER_MESSAGE_FILE = 'SET_USER_MESSAGE_FILE'


// mutations
const mutations = {
  SET_USER_MESSAGE: state => {
    console.log('SET_USER_MESSAGE')
  },
  SET_USER_MESSAGE_SUCCESS: (state, userMessage) => {
    setStore("username", userMessage.username)
    console.log('SET_USER_MESSAGE_SUCCESS')
    state.userMessage = userMessage
  },
  SET_USER_MESSAGE_FILE: state => {
    console.log('SET_USER_MESSAGE_FILE')
  },
}



//actions
const actions = {
  login({ commit }, userMessage) {
    commit(SET_USER_MESSAGE, userMessage)
    // const res = signIn(userMessage)
    const res = {
      code: '0',
      msg: '调用成功',
      data: {}
    }
    if (res.code === '0') {
      commit(SET_USER_MESSAGE_SUCCESS, res.data)
    } else {
      commit(SET_USER_MESSAGE_FILE)
      console.log(res.msg)
    }
  }
}




export default {
  namespaced: true,
  state,
  actions,
  mutations
}