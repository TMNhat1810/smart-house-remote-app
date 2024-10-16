import axios from 'axios'
import { ESP_IP } from '../IoT'

const instances = axios.create({
  baseURL: ESP_IP,
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

export { instances as ESPAxios }
