import axios from 'axios'

const baseURL = `http://localhost:4001/`
const axiosInstance = axios.create({
  baseURL: baseURL
})

export default axiosInstance