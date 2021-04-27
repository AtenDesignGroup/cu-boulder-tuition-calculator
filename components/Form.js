import React, { useState, useEffect, useRef } from 'react'

import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Heading,
  useToast,
  Button,
  Stack,
  Spinner,
  InputGroup,
  InputRightElement,
  FieldGroup,
  Avatar,
  Box,
  HStack,
  Icon,
  Textarea
} from '@chakra-ui/react'

// Form validation schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Your display name is required')
    .min(2, 'Minimum length is 2'),
  email: yup
    .string()
    .required('Your email is required')
    .email('Email must be valid')
    .min(2, 'Minimum length is 2'),
  comment: yup
    .string()
    .required('Comment is required')
    .min(2, 'Minimum length is 2')
})

export function Form ({ _id }) {
  const toast = useToast()
  const [isFormLoading, setIsFormLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState,
    errors,
    setValue
  } = useForm({
    shouldFocusError: true,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useFormPersist('form', { watch, setValue })

  async function registerUser (data) {
    const { name, email, comment } = data
    let response
    try {
      // TODO:
      console.log(name, email, comment)
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      // succces
      console.log({ response })
      toast({
        title: `Success`,
        description: `Your comment has been submitted`,
        status: 'success',
        duration: 4000,
        isClosable: true
      })
    } catch (error) {
      // error
      console.error(error)
      toast({
        title: `Error`,
        description: `${error.response.message}`,
        status: 'error',
        duration: 4000,
        isClosable: true
      })
      // reset()
    }
  }

  const onSubmit = async (data) => {
    setIsFormLoading(true)
    const label = 'test async functions with Promise.all'
    try {
      console.time(label)
      await Promise.all([registerUser(data)])
      console.timeEnd(label)
      setIsFormLoading(false)
    } catch (error) {
      console.log({ error })
      setIsFormLoading(false)
      console.error('error is', error)
      toast({
        title: `Error`,
        description: `${error.data.message}`,
        status: 'error',
        duration: 4000,
        isClosable: true
      })
      console.timeEnd(label)
    }
  }

  function resetForm (e) {
    console.log('reset')
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing='4' w='300px'>
        <FormControl isInvalid={errors.name} isRequired>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            type='text'
            ref={register}
            name='name'
            borderColor='gray.400'
            id='name'
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} isRequired>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            type='email'
            ref={register}
            name='email'
            borderColor='gray.400'
            id='email'
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.comment} mt={3} isRequired>
          <FormLabel htmlFor='comment'>Comment</FormLabel>
          <Textarea
            type='text'
            ref={register}
            name='comment'
            borderColor='gray.400'
            id='comment'
          />
          <FormErrorMessage>
            {errors.comment && errors.comment.message}
          </FormErrorMessage>
        </FormControl>

        <HStack width='full'>
          <Button
            colorScheme='blue'
            size='lg'
            type='submit'
            height='48px'
            width='200px'
            flex='none'

          >
            {
              // disabled={!formState.isValid || formState.isSubmitting}
            }
            {isFormLoading ? (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='md'
              />
            ) : (
              'Save'
            )}
          </Button>

          <Button variant='ghost' size='lg' type='reset' colorScheme='red'>
            Reset
          </Button>
        </HStack>

      </Stack>
    </form>
  )
}
