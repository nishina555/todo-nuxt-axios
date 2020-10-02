import { axios } from '../index.js';

class Todos {
  static getAll() {
    return axios.$get(`todos`);
  }
}

export default Todos;