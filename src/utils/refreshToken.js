import {
  refreshTokenApi
} from 'api/base'
import router from '../router'
import {
  Toast
} from 'mint-ui'

export function refreshToken(config) {
  const refresh_token = sessionStorage.getItem('refresh_token')
  // eslint-disable-next-line
  if (refresh_token && refresh_token !="undefined") {
    return refreshTokenApi(refresh_token).then(res => {
      // return new Promise((resolve) => {
      if (res.status === 'T') {
        // 更新过期时间，以及登录状态
        refreshExpires(res.expires_in)
        sessionStorage.setItem('access_token', res.access_token)
        sessionStorage.setItem('refresh_token', res.refresh_token)
        if (config) {
          config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('access_token')
          Promise.resolve(config)
        } else {
          Promise.resolve()
        }
      } else {
        sessionStorage.clear()
        router.push('/login')
      }
      // })
      // eslint-disable-next-line
    }, err => {
      // Toast('系统超时,请重新登录')
      sessionStorage.clear()
      setTimeout(() => {
        router.push('/login')
      }, 1000)
    })
    // eslint-disable-next-line
  } else {
    router.push('/login')
  }
}

export function refreshExpires(expires) {
  sessionStorage.setItem('expires', new Date().getTime() / 1000 + Number(expires))
}