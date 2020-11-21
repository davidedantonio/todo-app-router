<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todoItem="todo"
      @change-todo="changeTodo"
    />
  </div>
</template>

<script>
import * as todoService from '../services/todoService'
import TodoItem from './TodoItem'

export default {
  props: {
    finished: {
      type: Boolean,
      required: true
    }
  },
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
    }
  },
  created() {
    this.getTodoList()
  },
  methods: {
    changeTodo(todo) {
      todo.finished = !todo.finished
      todoService
        .updateTodo(todo)
        .then(() => this.getTodoList())
        .catch(e => console.log('Error while saving todo' + e.message))
    },
    getTodoList() {
      todoService
        .getAllTodos(this.finished)
        .then(response => {
          this.todos = response
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.todo-list {
  width: 40%;
  margin: 0 auto;
}
</style>
