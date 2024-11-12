import { ESPAxios } from '../configs/axios'

export async function open() {
  try {
    const response = await ESPAxios.post('', { isServo: true })
    if (response) return true
    return false
  } catch {
    return false
  }
}

export async function close() {
  try {
    const response = await ESPAxios.post('', { isServo: false })
    if (response) return true
    return false
  } catch {
    return false
  }
}
