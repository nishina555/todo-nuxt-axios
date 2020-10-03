
import axiosInstance from './index.js'

// import axios from 'axios';
// const baseURL = `http://localhost:4001/`
// const axiosInstance = axios.create({
//   baseURL: baseURL
// })

class Todos {
  static async getAll(){
    const response = await axiosInstance.get(`todos`);
    // const response = await axios.get(`http://localhost:4001/todos`);
    return response.data;
  }
}
export default Todos