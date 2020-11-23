import { createStore } from 'vuex'
import * as todo from './modules/todo'
import * as loader from './modules/loader'
import * as notification from './modules/notification'

const store = createStore({
  modules: {
    notification,
    loader,
    todo
  },
  state: {},
  mutations: {},
  actions: {}
})

export default store
