import request from '@/utils/request'

/**
 * 获取员工的简单信息列表
 */
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 * 获取员工的综合信息列表
 * @param {object} params
 */
export function getEmployeeList(params) {
  return request({
    url: '/sys/user',
    params
  })
}

/**
 * 删除员工功能
 * @param {string} id
 */
export function delEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}
