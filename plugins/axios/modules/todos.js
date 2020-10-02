import { axios } from '../index.js';

class Todos {
  static getAll() {
    return axios.$get(`todos`);
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