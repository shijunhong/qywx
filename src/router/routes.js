/* eslint-disable */
export default [
  {
    path: '/login',
    name: '登录页',
    component: () =>
      import ('views/common/login')
  },
  {
    path: '/invite',
    name: '邀请客户',
    component: () =>
      import ('views/invite')
  },
  {
    path: '/addclient',
    name: '邀请客户表单',
    component: () =>
      import ('views/invite/form')
  },
  {
    path: '/inviteok',
    name: '客户资料提交成功',
    component: () =>
      import ('views/invite/ok')
  },
  {
    path: '/customer',
    name: '获客统计',
    component: () =>
      import ('views/invite/customer')
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
]