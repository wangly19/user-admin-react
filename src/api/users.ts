import network from '@/utils/network';
import { AxiosPromise } from 'axios'

const userModuleRequest = {
  getUserWebAuth: 'GET /webAuth',
  getUserWebUser: 'GET /webUser'
}


export function getUserWebAuth <T extends Object>(params: T): AxiosPromise<any> {
  return network({
    url: '/webAuth',
    method: 'GET',
    params: params
  })
}
 
export function getUserWebUser <T extends Object>(params: T): AxiosPromise<any> {
  return network({
    url: '/webUser',
    method: 'GET',
    params: params
  })
}