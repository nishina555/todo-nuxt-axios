<template>
  <div class="container">
    <h2>
      todolist
    </h2>
    <input @keyup.enter="handleAddTodo" v-model="title" type text name="title">
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
  },
  methods: {
    async handleAddTodo() {
      const todo = {
        title: this.title,
        is_completed: false,
      };
      await this.$axios.post(`http://localhost:4001/todos`, todo);
      // TODO 画面のリロード
      // TODO postしたらフォームからcreateを実行できないように制御する
    }
  }

}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>