<template>
  <div class="container">
    <h2>
      todolist
    </h2>
    <input @keydown.enter="handleAddTodo" v-model="title" type text name="title">
    <todo-list
      :todos="todos"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  data() {
    return {
      title: "",
    }
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get(`http://localhost:4001/todos`)
    return { todos: data }
  },
  methods: {
    async handleAddTodo() {
      // 日本語変換時のEnterの場合、後続処理はしない
      if (event.keyCode !== 13) return

      const todo = {
        title: this.title,
        is_completed: false,
      };
      await this.$axios.post(`http://localhost:4001/todos`, todo);

      // const { data } = await this.$axios.get(`http://localhost:4001/todos`);
      const data = await this.getTodos();

      this.todos = data;
      this.title="";
      // TODO 画面のリロード
      // TODO postしたらフォームからcreateを実行できないように制御する
    },
    async getTodos() {
      const { data } = await this.$axios.get(`http://localhost:4001/todos`);
      return data;
    }
  }

}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>