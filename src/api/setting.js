import request from '@/utils/request'

/**
 * 获取角色列表
 * @param {string} params
 */
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}
