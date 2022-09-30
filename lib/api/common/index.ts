import axios from "axios"
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios"

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
console.log(API_BASE_URL)

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  withCredentials: true,
})

export const admin: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  withCredentials: true,
})

export const cafe24Cilent: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  withCredentials: true,
})

cafe24Cilent.interceptors.request.use(async (req: AxiosRequestConfig) => {
  const config = req

  if (!config?.headers) {
    return
  }

  return config
})

cafe24Cilent.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return new Promise(() => {
      throw error
    })
  }
)

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
