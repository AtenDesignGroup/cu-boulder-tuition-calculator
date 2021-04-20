import {
  Box,
  BoxProps,
  Avatar,
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
  VStack
} from '@chakra-ui/react'

import { Step } from '@/components/step/Step'
import { StepContent } from '@/components/step/StepContent'
import { Steps } from '@/components/step/Steps'
import { useSteps } from '@/components/step/useSteps'

const questions = [
  {
    id: 1,
    title: 'I am a/an',
    text: null,
    options: [
      {
        id: 1,
        title: 'Undergraduate',
        value: 'undergraduate'
      },
      {
        id: 2,
        title: 'Graduate',
        value: 'graduate'
      },
      {
        id: 3,
        title: 'Professional Graduate',
        value: 'professional_graduate'
      },
      {
        id: 4,
        title: 'Law',
        value: 'law'
      }
    ]
  },
  {
    id: 2,
    title: 'Select Residency',
    text: null,
    options: [
      {
        id: 1,
        title: 'Colorado Resident',
        value: 'colorado_resident'
      },
      {
        id: 2,
        title: 'Nonresident',
        value: 'nonresident'
      },
      {
        id: 3,
        title: 'International',
        value: 'international'
      }
    ]
  },
  {
    id: 3,
    title: 'Where will you be living?',
    text: null,
    options: [
      {
        id: 1,
        title: 'On campus',
        value: 'on_campus'
      },
      {
        id: 2,
        title: 'Living with parents',
        value: 'Living_with_parents'
      },
      {
        id: 3,
        title: 'Off campus and commuting',
        value: 'off_campus_and_commuting'
      }
    ]
  },
  {
    id: 4,
    title: 'Select your Health Insurance Plan',
    text:
      'Will you be waiving the CU Gold Student Health Insurance Plan (SHIP) or selecting the BuffCare Program?  In order to waive health insurance, your existing coverage must offer benefits comparable to those provided under the CU Gold Plan.',
    options: [
      {
        id: 1,
        title:
          'Yes, I will be waiving CU Gold Health Insurance because I have comparable health insurance coverage.',
        value: 'waiving'
      },
      {
        id: 2,
        title:
          'I will be selecting BuffCare to supplement my own health insurance.',
        value: 'buffCare'
      },
      {
        id: 3,
        title:
          'No, I will stay enrolled in the Gold Health Insurance Plan and pay the premium on my tuition bill.',
        value: 'no'
      }
    ]
  },
  {
    id: 5,
    title: 'What school or college are you interested in?',
    text: null,
    options: [
      {
        id: 1,
        title: 'Arts and Sciences, ENVD, EDUC, Other',
        value: 'arts_and_sciences'
      },
      {
        id: 2,
        title: 'Business',
        value: 'business'
      },
      {
        id: 3,
        title: 'Engineering',
        value: 'engineering'
      },
      {
        id: 4,
        title: 'Media, Communication and Information (CMCI)',
        value: 'media'
      },
      {
        id: 5,
        title: 'Music',
        value: 'music'
      }
    ]
  },
  {
    id: 7,
    title: 'How many credit hours will you be taking?',
    text: 'Select number of credit hours',
    options: [
      {
        id: 1,
        title: '1',
        value: 1
      },
      {
        id: 2,
        title: '2',
        value: 2
      },
      {
        id: 3,
        title: '3',
        value: 3
      },
      {
        id: 4,
        title: '4',
        value: 4
      },
      {
        id: 5,
        title: '5',
        value: 5
      },
      {
        id: 6,
        title: '6',
        value: 6
      },
      {
        id: 7,
        title: '7',
        value: 7
      },
      {
        id: 8,
        title: '8',
        value: 8
      },
      {
        id: 9,
        title: '9',
        value: 9
      },
      {
        id: 10,
        title: '10',
        value: 10
      },
      {
        id: 11,
        title: '11',
        value: 11
      },
      {
        id: 12,
        title: '12',
        value: 12
      },
      {
        id: 13,
        title: '13',
        value: 13
      },
      {
        id: 14,
        title: '14',
        value: 14
      },
      {
        id: 15,
        title: '15',
        value: 15
      },
      {
        id: 16,
        title: '16',
        value: 16
      },
      {
        id: 17,
        title: '17',
        value: 17
      },
      {
        id: 18,
        title: '18',
        value: 18
      }
    ]
  }
]

const Form = ({ text, options }) => {
  return (
    <>
      {text && (
        <Text fontSize='sm' mb='.75rem'>
          {text}
        </Text>
      )}

      {options && (
        <FormControl isRequired>
          <Select id='' name=''>
            {options.map((option) => (
              <option value={option.value} key={option.id}>
                {option.title}
              </option>
            ))}
          </Select>
          <FormHelperText>Add the help text here</FormHelperText>
          <FormErrorMessage>Error message shown here</FormErrorMessage>
        </FormControl>
      )}
    </>
  )
}

export default function StepPage ({ siteSettings }) {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <Box
      mx='auto'
      maxW='2xl'
      py='10'
      px={{ base: '6', md: '8' }}
      minH='400px'
    >
      <Heading size='lg' as='h3' mb='8'>
        Tuition Calculator
      </Heading>
      <Steps activeStep={activeStep}>
        {questions.map((question, index) => (
          <Step title={question.title} key='{question.id}'>
            <StepContent>
              <Stack shouldWrapChildren spacing='4'>
                <Form text={question.text} options={question.options} />

                <HStack>
                  <Button
                    size='sm'
                    variant='ghost'
                    isDisabled={index === 0}
                    onClick={prevStep}
                  >
                    Back
                  </Button>

                  <Button size='sm' onClick={nextStep}>
                    {index === questions.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </HStack>
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Steps>
      <HStack
        display={activeStep === questions.length ? 'flex' : 'none'}
        mt='10'
        spacing='4'
        shouldWrapChildren
      >
        <Text>All steps completed - you&apos;re finished</Text>
        <Button size='sm' onClick={prevStep}>
          Back
        </Button>
        <Button
          size='sm'
          onClick={reset}
          variant='outline'
          verticalAlign='baseline'
        >
          Reset
        </Button>
      </HStack>
    </Box>
  )
}
