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

/**
 * 根据用户 ID 获取详情
 * @param {string} id
 */
export function getUserDetailById(id) {
  return request({
    url: `sys/user/${id}`
  })
}
