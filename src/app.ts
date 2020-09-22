
import { getUserWebAuth, getUserWebUser } from '@/api/users';
import Storage from '@/utils/storage';
import routerConfig from '@/config/defineRoutes'

// src/app.ts
export async function getInitialState(): Promise<any> {
  const token = Storage.getData('token')
  const authData: any = await getUserWebAuth({ token });
  const userData: any = await getUserWebUser({ token });
  const newRoutes: any = await resetRoutes(authData)
  const isLogin: boolean = token ? true : false
  return {
    userData,
    authData,
    isLogin,
    newRoutes
  }
}

function resetRoutes (authData: any) {
  return new Promise(resolve => {
    let result: any[] = []
    if (authData.auth.includes('root')) {
      result = routerConfig
    } else {
      result = filterRoutes(routerConfig, authData.auth)
    }
    resolve(result)
  })
}


/**
 * 判断路由权限是否存在
 * @param route 路由
 * @param roles 用户权限列表
 */
function hasRoles(route: any, roles: Array<string>): boolean {
  if (route.auth) {
    return roles.some((role: string) => route.auth.includes(role))
  }
  return true
}

/**
 * 过滤权限方法
 * @param routes 异步路由表
 * @param roles 用户权限列表
 */
function filterRoutes(routes: any[], roles: Array<string>): any[] {
  let result: any[] = []
  routes.forEach((item: any) => {
    let temp = { ...item }
    
    console.log(hasRoles(temp, roles))
    if (hasRoles(temp, roles)) {
      if (temp.routes) {
        temp.routes = filterRoutes(temp.routes, roles)
      }
      result.push(temp)
    }
  })
  return result
}

