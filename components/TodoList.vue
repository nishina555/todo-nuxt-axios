<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div class="container">
        <p>{{ todo.title }}</p>
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
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>