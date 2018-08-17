/* eslint-disable */
export default [
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
  }
]