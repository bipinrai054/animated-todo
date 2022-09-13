import React from 'react'
import {
  Box,
  Text,
  Center,
  VStack,
  themeTools,
  useColorMode,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import { Checkbox } from 'react-native-paper'

export default function MainScreen() {
  const [check, setCheck] = React.useState(false)
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={5}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
        <Checkbox
          status={check ? 'checked' : 'unchecked'}
          onPress={() => setCheck(prev => !prev)}
        />
      </VStack>
    </Center>
  )
}
