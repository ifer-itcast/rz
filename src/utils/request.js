import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(config => {
  if (store.getters.token) {
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
  Message.error(error.Message)
  return Promise.reject(error) // 返回执行错误，进入 catch
})

export default service
