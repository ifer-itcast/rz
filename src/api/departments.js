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
 * 删除部门
 * @param {string} 部门 id
 */
export function delDepartments(id) {
  return request({
    method: 'DELETE',
    url: `/company/department/${id}`
  })
}

/**
 * 增加部门
 * @param {object} data
 */
export function addDepartments(data) {
  return request({
    type: 'POST',
    url: '/company/department',
    data
  })
}
