import { constantRoutes, asyncRoutes } from '@/router' // 静态路由表
const state = {
  routes: constantRoutes
}
const mutations = {
  // 修改 routes 的 mutation
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
}

const actions = {
  // 筛选出动态路由中能够和 menus 能够对应上的路由
  filterRoutes(context, menus) {
    const routes = []
    menus.forEach(key => {
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    context.commit('setRoutes', routes)
    return routes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
