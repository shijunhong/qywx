/* eslint-disable */
const commonRouter = [{
    path: '/login',
    name: '登录页',
    component: () =>
      import ('views/common/login')
  },
  {
    path: '/noauth',
    name: '无权限页面',
    component: () =>
      import ('views/common/NoAuth')
  },
  {
    path: '/expire',
    name: '应用过期',
    component: () =>
      import ('views/common/expire')
  },
  {
    path: '/nofound',
    name: '页面404',
    component: () =>
      import ('views/common/NoFound')
  }
]

export default commonRouter