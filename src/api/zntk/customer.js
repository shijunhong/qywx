import http from 'utils/http'

// 获客统计
export function statistics() {
  return http({
    url: '/api/zntk/v1/staff/invite-statistics',
    method: 'get'
  })
}
// 所有员工的获客统计
export function allStatistics() {
  return http({
    url: '/api/zntk/v1/staff/invite-rank-statistics',
    method: 'get'
  })
}

// 最新的邀请客户
export function newestList(page = 1, pageSize = 5) {
  return http({
    url: '/api/zntk/v1/staff/invite',
    method: 'get',
    params: {
      page,
      pageSize
    }
  })
}

// 员工排行
export function range(page = 1, pageSize = 5) {
  return http({
    url: '/api/zntk/v1/staff/invite-rank',
    method: 'get',
    params: {
      page,
      pageSize
    }
  })
}