import { AppError } from '@/utils/AppError'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(
        new AppError(
          'Erro ao conectar com o servidor. Tente novamente mais tarde.',
        ),
      )
    }
  },
)
