import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, result) {
    state.userInfo = result
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    // action 里面请求的接口
    const result = await login(data)
    // 失败的情况已经在响应拦截器中处理过了
    context.commit('setToken', result)
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    // 获取用户ID获取用户的详情
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo }) // 合并 2 个接口获取的结果并设置到 Vuex
    return result // 后续做权限处理时需要用到
  },
  logout(context) {
    // 删除 token
    context.commit('removeToken')
    // 删除用户资料
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
