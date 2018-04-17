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
    return axios.post('/api/user', userInfo).then((response) => {
      Vue.cookie.set('token', response.data.token)
    })
  },
  signIn ({commit, state}, userInfo) {
    return axios.patch('/api/user', userInfo).then((response) => {
      Vue.cookie.set('token', response.data.token)
    })
  },
  getMyInfo ({commit, state}) {
    return axios.get('/api/user').then((response) => {
      let userInfo = response.data
      commit('setUserInfo', userInfo)
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
