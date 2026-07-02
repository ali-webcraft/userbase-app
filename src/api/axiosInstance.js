import axios from "axios"
import { store } from "../components/store/store"

const API_KEY = import.meta.env.VITE_API_KEY

const axiosInstance = axios.create({
 baseURL: import.meta.env.VITE_BASE_URL
})

axiosInstance.interceptors.request.use((config) => {
 const token = store.getState().auth.token
 config.headers.apikey = API_KEY
 if (token) {
  config.headers.Authorization = `Bearer ${token}`
 }
 return config
})

export default axiosInstance