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
    try {
      await axios.$post(`todos`, todo);
    } catch (error) {
      throw error;
    }
  }
  static async patch(todo) {
    try {
      await axios.$patch(`todos/${todo.id}`, todo);
    } catch (error) {
      throw error;
    }
  }
  static async delete(todo) {
    try {
      await axios.$delete(`todos/${todo.id}`, todo);
    } catch (error) {
      throw error;
    }
  }
}

export default Todos;