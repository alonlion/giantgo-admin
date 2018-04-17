import Vue from 'vue'
import axios from 'axios'

const state = {
  userInfo: {},
  token: ''
}

const getters = {
  userInfo: state => state.userInfo,
  token: state => state.token
}

const actions = {
  signUp ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      axios.post('/api/user', userInfo).then((response) => {
        Vue.cookie.set('token', response.data.token)
        resolve(response)
      }).catch(({response}) => {
        reject(response.data)
      })
    })
  },
  signIn ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      axios.patch('/api/user', userInfo).then((response) => {
        Vue.cookie.set('token', response.data.token)
        resolve(response)
      }).catch(({response}) => {
        reject(response.data)
      })
    })
  },
  getMyInfo ({commit, state}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/user').then((response) => {
        let userInfo = response.data
        commit('setUserInfo', userInfo)
        resolve(response)
      }).catch(({response}) => {
        reject(response.data)
      })
    })
  },
  clearUserInfo ({commit, state}) {
    commit('clearUserInfo')
    Vue.cookie.delete('token')
  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  logout () {
    state.userInfo = null
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
