import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']
// 前置守卫，必须执行 next
// next 放过
// next(false) 终止
// next(地址) 跳转到某个地址
router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
  if (store.getters.token) {
    // 有 token
    if (to.path === '/login') {
      // 如果要访问的是登录页，跳转到主页
      next('/')
    } else {
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
  // 为了解决切换地址时进度条的不关闭的问题，例如在 /dashboard 时再输入 /login
  // 从 /dashboard 到 /login（注意此时还没跳转完成），因为是不同的地址会触发 beforeEach
  // 先走 #1
  // 然后 #2，跳转到 /，然后再重定向到 /dashboard
  // 此时变成了同一个地址间的跳转，并不会再次触发 beforeEach 和 afterEach
  // 可以尝试不同地址跳转的现象，例如把 #3 处的代码随意改成 next('/xxx')，则会再次触发 beforeEach 和 afterEach
  nprogress.done()
})

// 后置守卫
router.afterEach(() => {
  // 完成进度条
  nprogress.done()
})
