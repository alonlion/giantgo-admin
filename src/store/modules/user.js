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
  signIn ({commit, state}, userInfo) {
    return axios.post('/api/Users/Login?' + 'code=' + userInfo.username + '&pwd=' + userInfo.password).then((response) => {
      commit('setUserInfo', response.data.Content)
      Vue.cookie.set('token', response.data.Desc)
    })
  },
  getMyInfo ({commit, state}) {
    return axios.post('/api/Users/Test').then((response) => {
    })
  },
  clearUserInfo ({commit, state}) {
    commit('logout')
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
