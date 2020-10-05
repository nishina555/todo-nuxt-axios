<template>
  <div>
    <div class="container" v-for="todo in todos" :key="todo.id">
      <v-checkbox
        :class="{ completed: todo.isCompleted}"
        @change="handleChange(todo)"
        :label="`${ todo.title }`"
        v-model="todo.isCompleted"
        hide-details
      ></v-checkbox>
      <v-btn
        depressed
        small
        @click="handleClick(todo)"
      >
        削除
      </v-btn>
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
  align-items: flex-end;
  padding: 0;
}
.completed {
  text-decoration: line-through;
}
</style>