<template>
  <TodoList :finished="true" />
</template>

<script>
import TodoList from '../components/TodoList'

export default {
  components: {
    TodoList
  }
}
</script>
