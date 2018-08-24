import axios from 'axios'
import {
  host
} from '@/config.js'
// 登陆
export function login(code) {
  return axios({
    baseURL: `${host}`,
    timeout: 60000,
    url: '/oauth/token',
    data: {
      grant_type: 'qy_weixin_suite',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      code,
      app_name: 'zntk'
    },
    method: 'post'
  })
}

// 登陆
// eslint-disable-next-line
export function refreshTokenApi(refresh_token) {
  return axios({
    baseURL: `${host}`,
    timeout: 60000, // 请求超时时间
    url: '/oauth/token',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
    },
    data: {
      grant_type: 'refresh_token',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      refresh_token
    },
    method: 'post'
  })
}