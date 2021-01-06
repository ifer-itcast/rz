import request from '@/utils/request'

/**
 * 登录
 * @param {*} data
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户资料
 */
export function getUserInfo() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}

export function logout() {

}
