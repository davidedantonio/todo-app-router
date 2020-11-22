import { createStore } from 'vuex'
import * as todo from './modules/todo'
import * as loader from './modules/loader'

const store = createStore({
  modules: {
    loader,
    todo
  },
  state: {},
  mutations: {},
  actions: {}
})

export default store
