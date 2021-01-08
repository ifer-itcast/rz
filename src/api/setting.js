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
