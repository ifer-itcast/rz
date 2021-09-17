import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
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
const actions = {
  async login(context, data) {
    try {
      const result = await login(data)
      // 失败的情况已经在响应拦截器中处理过了
      context.commit('setToken', result)
    } catch (e) {
      // ...
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
