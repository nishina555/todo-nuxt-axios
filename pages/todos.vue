<template>
  <div class="container">
    <h2>
      todolist
    </h2>
    <todo-list
      :todos="todos"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.get(`http://localhost:4001/todos`)
    return { todos: data }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>