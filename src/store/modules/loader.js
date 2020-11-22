export const namespaced = true

export const state = {
  isLoading: false
}

export const mutations = {
  LOADING(state, loadingState) {
    state.isLoading = loadingState
  }
}

export const actions = {
  loading({ commit }, loading) {
    commit('LOADING', loading)
  }
}

export const getters = {}