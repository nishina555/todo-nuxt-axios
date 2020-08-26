<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div class="container">
        <p>{{ todo.title }}</p>
        <button @click="handleClick(todo)">削除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array
    }
  },
  methods: {
    handleClick(todo) {
      this.$emit("removeTodo", todo);
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>