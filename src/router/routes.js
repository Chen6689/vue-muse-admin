export default [
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  },
  {
    path: '/',
    component: () => import('../views/Home'),
    name: 'Home',
    iconCls: 'home',
    children: [
      {
        path: '',
        name: 'Info',
        component: () => import('@/views/sample/Info'),
        meta: { auth: true }
      },
    ]
  },
]
