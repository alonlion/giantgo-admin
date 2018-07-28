import axios from 'axios'
import router from '../router'
import { getToken } from '@/utils/token'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 5000 // request timeout
})

service.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers['authorization'] = 'Bearer ' + getToken()
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
  // Do something with response data

  return response
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    router.app.$router.push({name: 'signIn', query: {redirect: router.app.$route.fullPath}})
  }

  return Promise.reject(error)
})

export default service
