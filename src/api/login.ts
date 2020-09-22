import network from '@/utils/network';
import { AxiosPromise } from 'axios'

export function userLogin <T extends Object>(params: T): AxiosPromise<any> {
  return network({
    url: '/login',
    method: 'POST',
    data: params
  })
}