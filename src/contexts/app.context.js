import React, { createContext, useEffect, useRef, useState } from 'react'
import { EventHandler, notificationUtils } from '../utils'
import { API_ENDPOINT } from '../api'
import { CAM_IP, ESP_IP } from '../configs'
import { ServerAxios } from '../configs/axios/server'
import { ESPAxios } from '../configs/axios/esp'

export const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
  const [serverURL, setServerURL] = useState(API_ENDPOINT)
  const [espURL, setEspURL] = useState(ESP_IP)
  const [camURL, setCamURL] = useState(CAM_IP)

  const tokenRef = useRef(null)
  const wsRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      tokenRef.current = await notificationUtils.registerService()
    }
    init()
  }, [])

  useEffect(() => {
    if (serverURL) {
      // eslint-disable-next-line no-undef
      wsRef.current = new WebSocket(
        'ws://' + serverURL.split('//')[1] + '/sensor-data',
      )
      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data)
        const handler = EventHandler.get(data.event)
        handler(data)
      }
    }
    ServerAxios.defaults.baseURL = serverURL
  }, [serverURL])

  useEffect(() => {
    if (tokenRef.current) ServerAxios.post('/token', { token: tokenRef.current })
  }, [serverURL, tokenRef.current])

  useEffect(() => {
    ESPAxios.defaults.baseURL = espURL
  }, [espURL])

  return (
    <AppContext.Provider
      value={{ setServerURL, setEspURL, setCamURL, serverURL, espURL, camURL }}
    >
      {children}
    </AppContext.Provider>
  )
}
