import axios from 'axios'
import { API_ENDPOINT } from '../../api'

const instances = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 300000,
})

instances.interceptors.response.use(
  (response) => {
    return response.data
  },
  async function (error) {
    return Promise.reject(error)
  },
)

export { instances as ServerAxios }
