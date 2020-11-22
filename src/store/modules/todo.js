import * as todoService from '../../services/todoService'

export const namespaced = true

export const state = {
  todos: []
}

export const mutations = {
  SET_TODOS(state, todoList = []) {
    state.todos = todoList
  },
  SET_DONE(state, todoList = []) {
    state.done = todoList
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  }
}

export const actions = {
  async fetchTodos({ commit, getters, dispatch }, finished = false) {
    dispatch('loader/loading', true, { root: true })
    commit('SET_TODOS')
    
    try {
      const todos = await todoService.getAllTodos()
      commit('SET_TODOS', getters.getTodosByState(todos, finished))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch('loader/loading', false, { root: true })
    }
  },
  async updateTodo({ dispatch }, todo) {
    try {
      dispatch('loader/loading', true, { root: true })
      await todoService.updateTodo(todo)
    } catch (e) {
      console.log(e)
    } finally {
      dispatch('loader/loading', false, { root: true })
    }
  },
  async createTodo({ commit, dispatch }, description) {
    const newTodo = {
      id: Date.now(),
      description: description,
      createdOn: new Date(),
      finished: false
    }

    dispatch('loader/loading', true, { root: true })
    try {
      await todoService.createTodo(newTodo)
      commit('ADD_TODO', newTodo)
    } catch (e) {
      console.log(e)
    } finally {
      dispatch('loader/loading', false, { root: true })
    }
  }
}

export const getters = {
  getTodosByState: () => (todos, finished) => {
    return todos.filter(todo => todo.finished === finished)
  }
}
