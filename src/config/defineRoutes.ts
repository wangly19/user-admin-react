interface IRouterConfig {
  path: string;
  meta?: { [key: string]: string };
  component?: string;
  wrapper?: Array<string>;
  rules?: Array<string>;
  redirect?: string;
  routes: IRouterConfig;
}

const router: IRouterConfig = [
  {
    path: '/user/login',
    title: '登录',
    wrappers: ['@/wrappers/auth'],
    component: '@/pages/User/Login',
  },
  {
    path: '/user/navigation',
    title: '模块导航',
    component: '@/pages/User/NavigAtion',
  },
  {
    path: '/error',
    title: '异常错误',
    component: '@/pages/404',
  },
  {
    path: '/',
    exact: true,
    title: '内网终端系统',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages',
        wrappers: ['@/wrappers/auth'],
        title: '首页',
        auth: ['admin', 'user'],
      },

      {
        path: '/test',
        component: '@/pages',
        wrappers: ['@/wrappers/auth'],
        title: '首页',
        auth: ['person', 'user1'],
      },

      {
        path: '/test1',
        component: '@/pages',
        wrappers: ['@/wrappers/auth'],
        title: '首页',
        auth: ['person', 'user1'],
      },
    ],
  },
  {
    path: '*',
    title: '异常错误',
    redirect: '/error',
  },
];

export default router;
