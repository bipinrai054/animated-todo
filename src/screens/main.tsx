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
import { Pressable } from 'react-native'
import TaskItem from '../components/task-item'

export default function MainScreen() {
  const [checked, setChecked] = React.useState(false)
  const handlePressCheckbox = React.useCallback(() => {
    setChecked(prev => !prev)
  }, [])
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
        <Pressable onPress={handlePressCheckbox}>
          <TaskItem isDone={checked} onToggleCheckBox={handlePressCheckbox} />
        </Pressable>
      </VStack>
    </Center>
  )
}
