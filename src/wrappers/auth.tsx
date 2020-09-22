import Storage from '@/utils/storage';
import React, { useEffect, useState } from 'react';
import { Redirect, useModel, history } from 'umi';

const AuthRouter: React.FC<any> = ({ children, match, route, routes }) => {
  /**
   * 获取全局model
   */
  const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
  const { authData } = initialState
  const token: string | null = Storage.getData('token')
  // 登录路由验证
  if (token) {
    if (match.path === '/user/login') {
      history.replace('/')
    } else {
      // 权限验证
      const authState: boolean = route.auth.some((el: string) => {
        return authData.auth.includes(el)
      })
      authState || history.push('/error')
    }
  } else {
    match.path !== '/user/login' && history.replace('/user/login')
  }
  
  return children
}
 
export default AuthRouter;