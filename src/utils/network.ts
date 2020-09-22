import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';


interface ErrorCodes {
  [key: number]: string
}

const errorCodes: ErrorCodes = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。'
}


const network: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 4000
})

network.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
  return config
}, (error: any): Promise<any> => {
  return Promise.reject(error)
})


network.interceptors.response.use((value: AxiosResponse<any>): AxiosResponse<any> | Promise<any> => {
  const { status, data } = value
  // 请求成功后，需要判断是否是在预定错误列表中
  if (errorCodes.hasOwnProperty(status)) {
    message.error(`系统提示：${ errorCodes[status] }`)
    return Promise.reject(value)
  }
  return data
}, (error: any): Promise<any> => {
  return Promise.reject(error)
})

export default network