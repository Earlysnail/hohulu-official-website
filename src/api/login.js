import request from '../utils/request'


export const login = function (userMessage) {
  return request({
    url: '/login',
    options: {
      method: 'POST',
      data: userMessage
    }
  })
}
