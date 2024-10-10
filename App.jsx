import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Layout } from './src/layout'
import { PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Layout />
      </SafeAreaProvider>
    </PaperProvider>
  )
}
