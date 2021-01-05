import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
