export const routes: any[] = [
  {
    path: '/welcome',
    component: 'IndexPage',
    menu: {
      name: '欢迎', // 兼容此写法
      icon: 'testicon',
    },
    layout: {
      hideNav: true,
    },
    access: 'canRead',
  },
]
