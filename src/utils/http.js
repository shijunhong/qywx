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
service.interceptors.request.use((config) => {
  if (sessionStorage.getItem('access_token')) {
    config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('access_token')
    // config.headers['Authorization'] = 'Bearer ' + 'L2HWYN5bheGxeh7NtK3SS0WTd9Kpyc45sirpXvkD'
  }

  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })

  return config
}, error => {
  Indicator.close()
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let data = response.data
    // 请求失败
    if (data.status !== 'T') {
      //  如果失败的信息存在，跳出失败的信息
    }
    Indicator.close()
    return data
  }, error => {
    if (error.response) {
      Indicator.close()
      return Promise.reject(error.response) // eslint-disable-next-line
    } else {
      Indicator.close()
    }
  })

export default service