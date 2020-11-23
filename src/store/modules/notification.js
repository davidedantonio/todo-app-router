export const namespaced = true

export const state = {
  isVisible: false,
  message: null,
  severity: null,
  position: null
}

export const mutations = {
  SHOW_NOTIFICATION(state, notification) {
    state.message = notification.message
    state.severity = notification.severity
    state.position = notification.position
    state.isVisible = true
  },
  HIDE_NOTIFICATION(state) {
    state.message = null
    state.isVisible = false
  }
}

export const actions = {
  showNotification({ commit }, message) {
    commit('SHOW_NOTIFICATION', message)
    setTimeout(() => {
      commit('HIDE_NOTIFICATION')
    }, 5000)
  }
}