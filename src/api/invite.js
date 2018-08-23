import http from 'utils/http'

// 二维码以及地址
export function getQr(code) {
  return http({
    url: '/api/zntk/v1/staff/qrcode',
    params: {
      size: '150'
    },
    method: 'get'
  })
}

// 注册的时候获取验证码
export function getVerifyCode(mobile, staff_id, check = 0) {
  return http({
    url: '/api/zntk/v1/clients/verify-code',
    params: {
      mobile,
      staff_id,
      check
    },
    method: 'get'
  })
}

// 客户注册(员工邀请客户)
export function invite(d) {
  return http({
    url: `/api/zntk/v1/clients/${d.commonStaffId}`,
    data: d,
    method: 'post'
  })
}