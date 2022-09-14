import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import MainScreen from './screens/main'
import AboutScreen from './screens/about-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="main" component={MainScreen}></Drawer.Screen>
      <Drawer.Screen name="about" component={AboutScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default App
