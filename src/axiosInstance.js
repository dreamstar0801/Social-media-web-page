// src/axiosInstance.js

import axios from 'axios'

const axiosInstance = axios.create(

)

const token = localStorage.getItem('token')
const session_token = localStorage.getItem('session_token')

if (session_token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${session_token}`
} else {
  delete axiosInstance.defaults.headers.common['Authorization']
}
if (token){
  axiosInstance.defaults.headers.common['token'] = token
} else {
  delete axiosInstance.defaults.headers.common['token']
}

export default axiosInstance
