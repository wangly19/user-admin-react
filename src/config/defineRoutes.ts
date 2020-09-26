import { AlertOutlined } from '@ant-design/icons'

export interface IRouterConfig {
  path: string;
  meta?: {
    icon?: any,
    hideMenu?: boolean
  };
  exact?: boolean
  title?: string
  component?: string;
  wrappers?: Array<string>;
  auth?: Array<string>;
  redirect?: string;
  routes?: Array<IRouterConfig>;
}


const router: Array<IRouterConfig> = [
  {
    path: '/user/login',
    title: '登录',
    meta: {
      hideMenu: true
    },
    wrappers: ['@/wrappers/auth'],
    component: '@/pages/User/Login',
  },
  {
    path: '/user/navigation',
    title: '模块导航',
    meta: { 
      hideMenu: true
     },
    component: '@/pages/User/NavigAtion',
  },
  {
    path: '/error',
    title: '异常错误',
    meta: {
      hideMenu: true
    },
    component: '@/pages/404',
  },
  {
    path: '/',
    exact: true,
    title: '内网终端系统',
    meta: {
      icon: AlertOutlined
    },
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
        title: '首页1',
        auth: ['admin', 'user'],
      },

      {
        path: '/test1',
        component: '@/pages',
        wrappers: ['@/wrappers/auth'],
        title: '首页2',
        auth: ['admin', 'user'],
      },
    ],
  },
  {
    path: '*',
    meta: {
      hideMenu: true
    },
    title: '异常错误',
    redirect: '/error',
  },
];

export default router;
