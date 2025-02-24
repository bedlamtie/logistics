import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import qs from 'qs'

// 常用header
export enum CommonHeaderEnum {
  AUTHORIZATION = 'Authorization',
}

/**
 * 创建并配置一个 Axios 实例对象
 */
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_PROXY_PATH + import.meta.env.VITE_API_PREFIX,
  timeout: 50000, // 全局超时时间
  paramsSerializer: {
    serialize: (params: any) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  },
})

/**
 * Axios请求拦截器，对请求进行处理
 * 1. 序列化get请求参数
 * 2. 统一增加Authorization
 * @param config AxiosRequestConfig对象，包含请求配置信息
 */
service.interceptors.request.use(

  (config: InternalAxiosRequestConfig) => {
    // 统一增加Authorization请求头, skipToken 跳过增加token
    const token = sessionStorage.getItem('TOKEN')
    if (token && !config.headers?.skipToken) {
      config.headers![CommonHeaderEnum.AUTHORIZATION] = `Bearer ${token}`
    }

    // 处理完毕，返回config对象
    return config
  },
  (error) => {
    // 对请求错误进行处理
    return Promise.reject(error)
  },
)

/**
 * 响应拦截器处理函数
 * @param response 响应结果
 * @returns 如果响应成功，则返回响应的data属性；否则，抛出错误或者执行其他操作
 */
function handleResponse(response: AxiosResponse<any>) {
  if (response.data.code === 1) {
    throw response.data
  }

  return response.data
}

/**
 * 添加 Axios 的响应拦截器，用于全局响应结果处理
 */
service.interceptors.response.use(handleResponse, (error) => {
  const status = Number(error.response.status) || 200
  if (status === 423) {
    return Promise.reject(new Error('演示环境，仅供预览'))
  }

  if (status === 424) { // 登录过期
    // 跳转登录页面
  }

  return Promise.reject(error.response.data)
})

// 导出 axios 实例
export default service
