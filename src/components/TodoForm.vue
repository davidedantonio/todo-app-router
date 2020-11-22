<template>
  <div class="todo-form">
    <input type="text" v-model="newTodo" />
    <button type="button" @click="addNewTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch('todo/createTodo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
.todo-form {
  width: 40%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.todo-form > input {
  flex: 3;

  margin-right: 20px;
  padding: 10px;
  font-size: 1.3rem;
  border: 2px solid #c9c9c9;
}

.todo-form > input:focus {
  outline: none !important;
  border: 2px solid #42b983;
}

.todo-form > button {
  flex: 1;
  border: none;
  background: #42b983;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}
</style>
