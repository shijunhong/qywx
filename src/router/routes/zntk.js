/* eslint-disable */
const zntkRouter = [{
    path: '/invite',
    name: '邀请客户',
    component: () =>
      import ('views/zntk/invite')
  },
  {
    path: '/addclient',
    name: '邀请客户表单',
    component: () =>
      import ('views/zntk/invite/form')
  },
  {
    path: '/inviteok',
    name: '客户资料提交成功',
    component: () =>
      import ('views/zntk/invite/ok')
  },
  {
    path: '/workbench',
    name: '工作台',
    component: () =>
      import ('views/zntk/invite/workbench')
  },
  {
    path: '/customer',
    name: '获客统计',
    component: () =>
      import ('views/zntk/invite/customer')
  }
]

export default zntkRouter