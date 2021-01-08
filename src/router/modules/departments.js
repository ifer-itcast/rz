import Layout from '@/layout'
// 导出员工的路由规则
export default {
  name: 'departments', // 后续做权限的时候会用
  path: '/departments',
  component: Layout,
  children: [{
    path: '', // 二级路由的默认路由
    component: () => import('@/views/departments'),
    meta: {
      title: '组织架构',
      icon: 'tree'
    }
  }]
}
