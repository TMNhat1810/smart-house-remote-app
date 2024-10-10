import React, { createContext, useEffect } from 'react'
import { notificationUtils } from '../utils'

const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
  useEffect(() => {
    notificationUtils.registerService()
  }, [])

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
