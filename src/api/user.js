import request from '@/utils/request'

export function signIn (userName, password) {
  return request({
    url: '/user/token',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export function signUp (userInfo) {
  return request({
    url: '/user',
    method: 'post',
    data: userInfo
  })
}

export function getMyInfo () {
  return request({
    url: '/user',
    method: 'get'
  })
}
