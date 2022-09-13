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

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={5}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box>
          <Text>Hello</Text>
        </Box>
      </VStack>
    </Center>
  )
}
