import { axios } from '../index.js';

class Todos {
  static async getAll() {
    try {
      const response = await axios.$get(`todos`);
      return response
    } catch (error) {
      throw error;
    }
  }
  static async post(todo) {
    await axios.$post(`todos`, todo);
  }
  static async patch(todo) {
    await axios.$patch(`todos/${todo.id}`, todo);
  }
  static async delete(todo) {
    await axios.$delete(`todos/${todo.id}`, todo);
  }
}

export default Todos;