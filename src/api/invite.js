import http from 'utils/http'

// 二维码以及地址
export function getQr(code) {
  return http({
    url: '/api/zntk/v1/staff/qrcode',
    size: '150',
    method: 'get'
  })
}