
import axiosInstance from './index.js'

// import axios from 'axios';
// const baseURL = `http://localhost:4001/`
// const axiosInstance = axios.create({
//   baseURL: baseURL
// })

class Todos {
  static async getAll() {
    try {
      const response = await axiosInstance.get(`todos`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async post(todo) {
    try {
      await axiosInstance.post(`todos`, todo);
      // const response = await axiosInstance.post(`todos`, todo);
      // console.log(response)
    } catch (error) {
      throw error;
    }
  }
  static async patch(todo) {
    try {
      await axiosInstance.patch(`todos/${todo.id}`, todo);
    } catch (error) {
      throw error;
    }
  }
  static async delete(todo) {
    try {
      await axiosInstance.delete(`todos/${todo.id}`, todo);
    } catch (error) {
      throw error;
    }
  }
}
export default Todos