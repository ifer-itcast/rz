import request from '@/utils/request'

/**
 * 获取组织架构
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}
/**
 * @param {string} 部门 id
 */
export function delDepartments(id) {
  return request({
    method: 'DELETE',
    url: `/company/department/${id}`
  })
}
