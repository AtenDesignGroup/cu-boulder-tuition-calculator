
import { Box, BoxProps, Avatar,

  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Tag,
  TagLabel,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  Select,
  useColorModeValue,
  VStack, } from '@chakra-ui/react'
import * as React from 'react'
import { useStep } from './useStep'
import { Question } from '../Question'

export const StepContent = (props) => {
  const { isLastStep } = useStep()
  return (
    <Box
      color={useColorModeValue('gray.600', 'gray.400')}
      borderStartWidth={isLastStep ? '1px' : '0'}
      ms="4"
      mt="2"
      ps="8"
      pb="3"
      fontSize="lx"
      {...props}
    />
  )
}
