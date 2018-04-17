import { isEmpty, forEach } from 'lodash'
import axios from 'axios'

const state = {
  seminar: {}
}

const getters = {
  seminar: state => {
    let seminarInfo = {}
    if (!isEmpty(state.seminar)) {
      seminarInfo.title = state.seminar.title
      seminarInfo.start_at = new Date(state.seminar.start_at)
      seminarInfo.end_at = new Date(state.seminar.end_at)
      seminarInfo.entity_type_id = state.seminar.entity_type_id || ''
      seminarInfo.attributes = state.seminar.attributes
      forEach(seminarInfo.attributes || [], attribute => {
        seminarInfo[attribute.attribute_code] = state.seminar[attribute.attribute_code] || ''
      })
    }
    return seminarInfo
  }
}

const actions = {
  getSeminar ({commit, state}, seminarId) {
    return new Promise((resolve, reject) => {
      axios.get('/api/seminars/' + seminarId).then((response) => {
        commit('setSeminar', response.data)
        resolve(response['data'])
      }, (response) => {
        reject(response)
      })
    })
  },
  updateSeminar ({commit, state}, seminarInfo) {
    return new Promise((resolve, reject) => {
      axios.put('/api/seminars/' + seminarInfo.id, seminarInfo).then((response) => {
        commit('setSeminar', response.data)
        resolve(response['data'])
      }, (response) => {
        reject(response)
      })
    })
  },
  deleteSeminar ({commit, state}, seminarId) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/seminars/' + seminarId).then((response) => {
        commit('deleteSeminar')
        resolve(response['data'])
      }, (response) => {
        reject(response)
      })
    })
  }
}

const mutations = {
  setSeminar (state, seminarInfo) {
    state.seminar = seminarInfo
  },
  deleteSeminar (state) {
    state.seminar = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
