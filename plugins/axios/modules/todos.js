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
  static post(todo) {
    axios.$post(`todos`, todo);
  }
  static patch(todo) {
    axios.$patch(`todos/${todo.id}`, todo);
  }
  static delete(todo) {
    axios.$delete(`todos/${todo.id}`, todo);
  }


}

export default Todos;