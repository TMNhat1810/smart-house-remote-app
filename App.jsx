import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Layout } from './src/layout'
import { PaperProvider } from 'react-native-paper'
import AppContextProvider from './src/contexts/app.context'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AppContextProvider>
          <Layout />
        </AppContextProvider>
      </SafeAreaProvider>
    </PaperProvider>
  )
}
