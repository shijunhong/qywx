/* eslint-disable */
import {
  host
} from '../config'
import axios from 'axios'
import router from '../router'
import {
  Indicator
} from 'mint-ui'
import v from '../main'
import {
  refreshToken
} from 'utils/refreshToken'
// 创建axios实例
const service = axios.create({
  baseURL: `${host}`,
  timeout: 60000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(async (config) => {
  if (sessionStorage.getItem('expires') && (sessionStorage.getItem('expires') - (new Date().getTime() / 1000) < 300)) {
      config =  await refreshToken(config)
      console.log(config)
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      return config
   
  } else {
    if (sessionStorage.getItem('access_token')) {
      config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('access_token')
      // config.headers['Authorization'] = 'Bearer ' + '9a6mN6qkIBcm90naxeEAFtnwcFq9Dp3UKXyObO1S'
    }

    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })

    return config
  }
}, error => {
  Indicator.close()
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let data = response.data
    Indicator.close()
    return data
  }, error => {
    if (error.response) {
      if (error.response.status == 401) {
        Indicator.close()
        //  如果失败的信息存在，跳出失败的信息
        const msg = error.response.data.error.message
        // 应用过期
        if (msg.startWith('qywx_application_expried')) {
          // 跳转到应用过期页面
          router.push('/expire')
          return
        }
        
        if (msg.startWith('qywx_application_not_enable')) {
          // 跳转到应用过期页面
          router.push('/expire')
          return
        }

        // code过期
        if (msg.startWith('invalid_credentials')) {
          sessionStorage.clear()
          router.push('/login')
          return
        }

        if (msg.startWith("access_denied")) {
          refreshToken()
          return
        }
        // 跳转到无权限页面
        router.push('/noauth')

      }
      Indicator.close()
    } else {
      Indicator.close()
    }
    return Promise.resolve(error.response.data)
  })

export default service