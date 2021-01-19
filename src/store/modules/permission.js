import { constantRoutes } from '@/router' // 静态路由表
const state = {
  routes: constantRoutes
}
const mutations = {
  // 修改 routes 的 mutation
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
