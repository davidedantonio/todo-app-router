import { defaultClient } from './common'

export const getAllTodos = async () => {
  try {
    const response = await defaultClient.get(`/todos`)
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}

export const updateTodo = async todo => {
  try {
    await defaultClient.put(`/todos/${todo.id}`, todo)
  } catch (e) {
    throw new Error(e)
  }
}

export const createTodo = async todo => {
  try {
    await defaultClient.post(`/todos`, todo)
  } catch (e) {
    throw new Error(e)
  }
}
