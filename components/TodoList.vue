<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div class="container">
        <input @change="handleChange(todo)" type="checkbox" v-model="todo.is_completed">
        <p :class="{ completed: todo.is_completed}">
          {{ todo.title }}
        </p>
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
    handleChange(todo){
      // console.log(todo);
      this.$emit("updateTodo", todo);
    },
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
p.completed {
  text-decoration: line-through;
}
</style>