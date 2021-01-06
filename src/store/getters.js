const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // token 快捷访问
  name: state => state.user.userInfo.username, // username 快捷访问
  userId: state => state.user.userInfo.userId
}
export default getters
