import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'

const TIMEOUT = 3

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (isCheckTimeOut()) {
      // !#3
      console.log('#3')
      // 退出
      store.dispatch('user/logout')
      // 跳转
      router.push('/login')
      // 返回
      // 你在请求拦截器返回了一个错误的 Promise，会到哪里
      return Promise.reject(new Error('TOKEN 超时了'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  // axios 默认加了一个 data
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    // 业务错了
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  // !#4
  console.log('#4')
  Message.error(error.message)
  // 你在响应拦截器，返回了一个错误的 Promise，会走哪里？
  return Promise.reject(error) // 返回执行错误，进入 catch
})
function isCheckTimeOut() {
  // 当前时间-缓存的时间 是否大于 1 小时
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > TIMEOUT
}
export default service
