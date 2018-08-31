import http2 from 'utils/http2'

// 登陆
export function login(code) {
  return http2({
    url: '/oauth/token',
    data: {
      grant_type: 'qy_weixin_suite',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      code,
      app_name: localStorage.getItem('app_name')
    },
    method: 'post'
  })
}

// 登陆
// eslint-disable-next-line
export function refreshTokenApi(refresh_token) {
  return http2({
    url: '/oauth/token',
    data: {
      grant_type: 'refresh_token',
      client_id: 1,
      client_secret: 'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw',
      refresh_token
    },
    method: 'post'
  })
}