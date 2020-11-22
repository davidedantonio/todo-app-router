<template>
  <TodoForm />
  <TodoList :finished="false" />
</template>

<script>
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default {
  components: {
    TodoList,
    TodoForm
  }
}
</script>
