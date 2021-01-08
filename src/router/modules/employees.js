import Layout from '@/layout'
// 导出员工的路由规则
export default {
  name: 'employees', // 后续做权限的时候会用
  path: '/employees',
  component: Layout,
  children: [{
    path: '', // 二级路由的默认路由
    component: () => import('@/views/employees'),
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }]
}
