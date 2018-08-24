/* eslint-disable */
import {
  host
} from '../config'
import axios from 'axios'
import {
  Indicator
} from 'mint-ui'


// 创建axios实例
const service = axios.create({
  baseURL: `${host}`,
  timeout: 60000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(async (config) => {
  return config
}, error => {
  Indicator.close()
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