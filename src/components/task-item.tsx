import React from 'react'
import { Pressable } from 'react-native'
import { Box, HStack, Text, useColorModeValue, Icon } from 'native-base'
import { Checkbox } from 'react-native-paper'
import AnimatedTaskLabel from './animated-task-label'
import SwipeView from './swipeable-view'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean
  onToggleCheckBox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  subject: string
}

const TaskItem = (props: Props) => {
  const {
    isDone,
    onToggleCheckBox,
    subject,
    onPressLabel,
    onRemove,
    simultaneousHandlers
  } = props
  // const theme = useTheme()
  // const highlightColor = themeTools.getColor(
  //   theme,
  //   useColorModeValue('blue.500', 'blue.400')
  // )
  // const boxStroke = themeTools.getColor(
  //   theme,
  //   useColorModeValue('muted.300', 'muted.500')
  // )
  // const checkmarkColor = themeTools.getColor(
  //   theme,
  //   useColorModeValue('white', 'white')
  // )
  // const activeTextColor = themeTools.getColor(
  //   theme,
  //   useColorModeValue('darkText', 'lightText')
  // )
  // const doneTextColor = themeTools.getColor(
  //   theme,
  //   useColorModeValue('muted.400', 'muted.600')
  // )
  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full "
          bg="red.500"
          alignItems={'flex-end'}
          justifyContent="center"
          pr="4"
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckBox}>
            <Checkbox status={isDone === true ? 'checked' : 'unchecked'} />
          </Pressable>
        </Box>
        <AnimatedTaskLabel
          // textColor={activeTextColor}
          textColor="red"
          inactiveTextColor="blue"
          // inactiveTextColor={doneTextColor}
          strikeThrough={isDone}
        >
          {subject}
        </AnimatedTaskLabel>
      </HStack>
    </SwipeView>
  )
}

export default TaskItem
