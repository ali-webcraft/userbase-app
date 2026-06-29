import axios from "axios"
import { store } from "../components/store/store"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrYW1nZXBqZG5od2RxZWxlc3ZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTc1NzQwNSwiZXhwIjoyMDk3MzMzNDA1fQ.YeceDGJcGqczUSmaZHZUtiPdLWu5LCuh-uT7E8iL_po"

const axiosInstance = axios.create({
 baseURL: "https://tkamgepjdnhwdqelesvk.supabase.co"
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