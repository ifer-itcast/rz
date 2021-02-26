const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // token 快捷访问
  name: state => state.user.userInfo.username, // username 快捷访问
  userId: state => state.user.userInfo.userId, // userId 快捷访问
  staffPhoto: state => state.user.userInfo.staffPhoto, // staffPhoto 快捷访问
  companyId: state => state.user.userInfo.companyId, // companyId 快捷访问
  routes: state => state.permission.routes
}
export default getters
