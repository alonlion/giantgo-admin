import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import moment from 'vue-moment'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(Element)
Vue.use(VueCookie)
Vue.use(moment)

axios.interceptors.request.use(function (config) {
  if (Vue.cookie.get('token')) {
    config.headers['securityid'] = Vue.cookie.get('token')
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Do something with response data

  return response
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    router.app.$router.push({name: 'signin', query: {redirect: router.app.$route.fullPath}})
  }

  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
