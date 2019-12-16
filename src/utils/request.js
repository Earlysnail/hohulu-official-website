import axios from 'axios'
import { removeStore, getStore } from "./storage";


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,  //baseURL
  timeout: 5000,    //请求超时时间
  // withCredentials: true, // 请求是否携带cookie
})

service.defaults.headers.post['Content-Type'] = 'application/json'

//request拦截器
service.interceptors.request.use(
  config => {
    let token = getStore('token')
    if (token) {
      // 如果存在登录信息则将其加到请求头中
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => {
    // 错误回调
    console.log(error)
    return Promise.reject(err)
  })


//response拦截器
service.interceptors.response.use(
  response => {
    // 没有错误，直接返回响应
    return response
  },
  error => {
    console.log('err' + error)
    if (error.response) {
      switch (error.response.status) {
				/**
				 * 这里默认401是用户后台返回的用户登录验证失败的状态码
				 * 验证失败，强制跳转登录界面
				 */
        case 401:
          removeStore('user_id')
          removeStore('token')
          window.location.href = '/login'
        /**
				 * 这里500是服务器错误
				 */
        case 500:
          console.log('服务器错误')
      }
    }
    console.log(JSON.stringify(error));  
    return Promise.reject(error.response.data)
  })

export default (url, options = {}, method = 'get') => {
  console.debug('request log: options data at http.js(' + method + ')')
  console.debug(options)
  let key = ~['delete', 'get', 'head'].indexOf(method) ? 'params' : 'data'
  console.log('request', url, method, options)
  return service(Object.assign({
    'url': url,
    'method': method,
    'validateStatus': (status) => {
      return status >= 200 && status < 300  // 自定义成功响应为: 状态码200到300之间
    }
  }, { [key]: options }))
}
