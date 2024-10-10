import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { Icon } from 'react-native-paper'
import { colors } from '../../themes'

import { Dashboard, Menu, Camera } from './sub'

const Tab = createBottomTabNavigator()

const routes = [
  {
    name: 'Dashboard',
    component: Dashboard,
    tabBarIcon: 'view-dashboard',
    label: 'Dashboard',
  },
  { name: 'Camera', component: Camera, tabBarIcon: 'camera', label: 'Camera' },
  { name: 'Menu', component: Menu, tabBarIcon: 'menu', label: 'Menu' },
]

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 55,
          borderColor: 'black',
        },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Icon
                source={route.tabBarIcon}
                size={size}
                color={focused ? colors.darkblue : colors.gray0}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 13,
                  color: focused ? colors.darkblue : colors.gray0,
                }}
              >
                {route.label}
              </Text>
            ),
            tabBarActiveBackgroundColor: 'rgba(0, 0, 0, 0.4)',
            tabBarButton: (props) => (
              <TouchableOpacity {...props} activeOpacity={0.6} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
