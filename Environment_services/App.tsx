import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import DrawerContainer from './Source/Screens/MainScreens/DrawerContainer'
export default function App() {
  return (
    <NavigationContainer>
      <DrawerContainer/>
    </NavigationContainer>
  )
}