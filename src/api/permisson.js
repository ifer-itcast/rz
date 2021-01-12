import request from '@/utils/request'

/**
 * 获取权限
 * @param {object} params
 */
export function getPermissionList(params) {
  return request({
    url: '/sys/permission',
    params
  })
}

/**
 * 新增权限
 * @param {object} data
 */
export function addPermission(data) {
  return request({
    url: '/sys/permission',
    method: 'post',
    data
  })
}

/**
 * 更新权限
 * @param {object} data
 */
export function updatePermission(data) {
  return request({
    url: `/sys/permission/${data.id}`,
    method: 'put',
    data
  })
}

/**
 * 删除权限
 * @param {string} id
 */
export function delPermission(id) {
  return request({
    url: `/sys/permission/${id}`,
    method: 'delete'
  })
}

/**
 * 获取权限详情
 * @param {string} id
 */
export function getPermissionDetail(id) {
  return request({
    url: `/sys/permission/${id}`
  })
}

