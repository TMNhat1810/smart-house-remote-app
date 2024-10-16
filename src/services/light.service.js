import { ESPAxios } from '../configs/axios'

export async function update(data) {
  try {
    const response = await ESPAxios.post('', data)
    return response
  } catch {
    return
  }
}
