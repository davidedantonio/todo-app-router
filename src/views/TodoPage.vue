<template>
  <TodoForm @todo-added="newTodoAdded" />
  <TodoList :finished="false" ref="todoList" />
</template>

<script>
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default {
  components: {
    TodoList,
    TodoForm
  },
  methods: {
    newTodoAdded() {
      this.$refs.todoList.getTodoList()
    }
  }
}
</script>
