import http from 'utils/http'

// 登陆
export function login(){
  return http({
    url:'/oauth/token',
    data:{
      grant_type:'qy_weixin_suite',
      client_id:1,
      client_secret:'syjIoXiFY7wrjZiUQDRPel4DSrtcWz9SZqBfX5Pw'
    },
    method:'post'
  })
}