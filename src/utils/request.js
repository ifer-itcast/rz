import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use()
service.interceptors.response.use(function(response) {
  // return response
  // !统一错误处理
  // 后端在响应错误的时候，有 2 种方式
  // 第一种：如果业务错了，返回错误的 HTTP 状态码，例如 400、401、403
  // 第二种：如果业务错了，返回的还是成功的状态码 200，只不过会把错误的信息放到真正的数据（data）里面，会把错误信息作为数据的一部分进行返回
  // axios 默认加了一个 data
  const { success, message, data } = response.data
  if (success) {
    return data
    // return response.data.data
  } else {
    // 业务错了
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, function(error) {
  Message.error(error.message)
  return Promise.reject(error) // 返回执行错误，进入 catch
})

export default service
