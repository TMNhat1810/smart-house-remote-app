import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, TouchableOpacity } from 'react-native'
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
    start: true,
  },
  { name: 'Camera', component: Camera, tabBarIcon: 'camera', label: 'Camera' },
  { name: 'Menu', component: Menu, tabBarIcon: 'menu', label: 'Menu', end: true },
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
          borderColor: colors.darkGreen,
          borderWidth: 1,
          borderBottomWidth: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
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
                color={focused ? colors.gray0 : colors.darkGreen}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 13,
                  color: focused ? colors.gray0 : colors.darkGreen,
                }}
              >
                {route.label}
              </Text>
            ),
            tabBarActiveBackgroundColor: colors.darkGreen,
            tabBarButton: (props) => (
              <TouchableOpacity {...props} activeOpacity={0.6} />
            ),
            tabBarItemStyle: [
              route.start && { borderTopLeftRadius: 20 },
              route.end && { borderTopRightRadius: 20 },
            ],
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
