import request from '../utils/request'

export const userSignIn = options => {
  console.log('userSignIn请求',options)
  return request('/signIn', options, 'post')
}

