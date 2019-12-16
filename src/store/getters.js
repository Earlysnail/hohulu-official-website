const getters = {
  getUserMessage(state, getters, rootState) {
    return state.userMessage || rootState.userMessage || { username: '马文涛' }
  }
}
export default getters
