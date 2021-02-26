import store from '@/store'
export default {
  methods: {
    checkPermission(key) {
      // 去用户的信息里面找 points 中有没有 key，如果有 key 则认为有权限，如果没有 key 则认为不能点击
      const { userInfo } = store.state.user
      if (userInfo.roles && userInfo.roles.points) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false // 如果没进去说明没权限
    }
  }
}
