import axios from 'axios'

const instances = axios.create({
  baseURL: '',
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

export { instances as AxiosInstance }
