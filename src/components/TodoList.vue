<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todo.todos"
      :key="todo.id"
      :todoItem="todo"
      @change-todo="changeTodo"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapState } from 'vuex'

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
  computed: {
    ...mapState(['todo'])
  },
  created() {
    this.fetchAllTodos()
  },
  methods: {
    changeTodo(todo) {
      todo.finished = !todo.finished
      this.$store.dispatch('todo/updateTodo', todo)
      this.fetchAllTodos()
    },
    fetchAllTodos() {
      this.$store.dispatch('todo/fetchTodos', this.finished)
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
