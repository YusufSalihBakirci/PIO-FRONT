import axios from 'axios'

// Ana API
export const LoginApi = axios.create({
  baseURL: 'https://localhost:7228/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// İkinci API
export const secondApi = axios.create({
  baseURL: process.env.VUE_APP_SECOND_API_URL || 'http://localhost:4000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Üçüncü API
export const thirdApi = axios.create({
  baseURL: process.env.VUE_APP_THIRD_API_URL || 'http://localhost:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})