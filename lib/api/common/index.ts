import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const API_BASE_URL = 'http://localhost:4000'
console.log(API_BASE_URL)

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export const admin: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

client.interceptors.request.use((req: AxiosRequestConfig) => {
  const config = req

  if (!config?.headers) {
    return
  }

  return config
})

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return new Promise(() => {
      throw error
    })
  }
)

export default client
