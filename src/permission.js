import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']
// 前置守卫，必须执行 next
// next 放过
// next(false) 终止
// next(地址) 跳转到某个地址
router.beforeEach(async(to, from, next) => {
  // 开启进度条
  nprogress.start()
  if (store.getters.token) {
    // 有 token
    if (to.path === '/login') {
      // 如果要访问的是登录页，跳转到主页
      next('/')
    } else {
      // !Navbar 组件的 created 钩子里面调用获取用户信息的 Action 是不是也 ok 呢？
      if (!store.getters.userId) {
        // 如果没有 userId 表示当前用户资料没有获取过
        await store.dispatch('user/getUserInfo')
        // 如果后续需要根据用户资料获取数据的话，这里务必改成同步的
      }
      next()
    }
  } else {
    // 无 token
    if (whiteList.includes(to.path)) {
      // 在白名单里，放行
      next()
    } else {
      // 不在，跳转到登录
      next('/login')
    }
  }
  // 为了解决手动切换地址时进度条的不关闭的问题，例如 /dashboard 再手动输入 /login
  nprogress.done()
})

// 后置守卫
router.afterEach(() => {
  // 完成进度条
  nprogress.done()
})
