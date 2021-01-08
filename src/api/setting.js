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

/**
 * 获取指定公司信息
 * @param {string} companyId
 */
export function getCompanyInfo(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}

/**
 * 删除角色
 * @param {string} id
 */
export function deleteRole(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}

/**
 * 编辑角色
 * @param {object} data
 */
export function updateRole(data) {
  return request({
    url: `/sys/role/${data.id}`,
    data,
    method: 'put'
  })
}

/**
 * 根据 ID 获取角色详情
 * @param {string} id
 */
export function getRoleDetail(id) {
  return request({
    url: `/sys/role/${id}`
  })
}
/**
 * 新增角色
 * @param {object} data
 */
export function addRole(data) {
  return request({
    method: 'POST',
    url: '/sys/role',
    data
  })
}
