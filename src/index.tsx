import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import MainScreen from './screens/main'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="main" component={MainScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default App
