<template>
  <div class="todo-item">
    <div class="description">
      {{ todoItem.description }}
      <span
        >(created on
        {{ moment(todoItem.createdOn).format('DD-MM-YYYY HH:MM') }})</span
      >
    </div>
    <div class="actions">
      <span
        class="fa"
        :class="[todoItem.finished ? 'fa-check-square' : 'fa-square']"
        @click="changeTodo(todoItem)"
      ></span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      moment
    }
  },
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeTodo() {
      this.$emit('change-todo', this.todoItem)
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #c9c9c9;
}

.todo-item > .description {
  text-align: left;
  flex: 10;
  font-weight: 800;
}

.todo-item > .description > span {
  font-size: 0.9rem;
  font-style: italic;
  color: #c9c9c9;
  display: block;
  font-weight: normal;
}

.actions {
  flex: 1;
}

.fa {
  font-size: 1.5rem;
}

.fa-check-square {
  color: #42b983;
}
</style>
