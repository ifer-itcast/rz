import Layout from '@/layout'
// 导出员工的路由规则
export default {
  name: 'permission', // 后续做权限的时候会用
  path: '/permission',
  component: Layout,
  children: [{
    path: '', // 二级路由的默认路由
    component: () => import('@/views/permission'),
    meta: {
      title: '权限管理'
    }
  }]
}
