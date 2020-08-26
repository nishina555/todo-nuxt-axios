<template>
  <div class="container">
    <loading-view v-if="isLoading" />
    <div v-else>
      <h2>
        todolist
      </h2>
      <input @keydown.enter="handleAddTodo" v-model="title" type text name="title">
      <todo-list
        :todos="todos"
        @removeTodo="handleRemoveTodo"
        @updateTodo="handleUpdateTodo"
      />
    </div>
  </div>

</template>

<script>
import TodoList from '@/components/TodoList'
// import LoadingView from '@/components/LoadingView'

export default {
  data() {
    return {
      title: "",
      isLoading: true,
    }
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get(`http://localhost:4001/todos`)
    return { todos: data }
  },
  mounted() {
    // デバック用。ロード完了処理をわざと遅延させることでローディング画面を表示させる
    // setTimeout(() => this.isLoading = false, 300);

    this.isLoading = false;
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

      this.todos = await this.getTodos();
      this.title="";
      // TODO 画面のリロード
      // TODO postしたらフォームからcreateを実行できないように制御する
    },
    async handleUpdateTodo(todo) {
      await this.$axios.patch(`http://localhost:4001/todos/${todo.id}`, todo);
      this.todos = await this.getTodos();
    },
    async handleRemoveTodo(todo) {
      await this.$axios.delete(`http://localhost:4001/todos/${todo.id}`);
      this.todos = await this.getTodos();
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