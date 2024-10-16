import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'
import NetworkSetting from '../screens/NetworkSetting'

const Stack = createNativeStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'transparent' },
      }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Network-setting" component={NetworkSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
