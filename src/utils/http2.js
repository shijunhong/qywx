/* eslint-disable */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: `${window.g.host}`,
  timeout: 60000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(async (config) => {
  return config
}, error => {
  Promise.resolve(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let data = response.data
    return data
  }, error => {
    return Promise.resolve(error.response.data)
  })

export default service