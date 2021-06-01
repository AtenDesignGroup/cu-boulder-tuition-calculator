import {
  Heading,
  Box,
  Text,
  Flex,
  Badge,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'

export function LineItems({ data, itemTotal }) {

  const {
    _key,
    description,
    itemValue,
    frontEndTitle,
    frequency,
    optionLogics,
    optional,
    optionLogicConditional
  } = data

  // console.log(showArray(data))

    return (
      <Box mb="8">
        <Flex alignItems="flex-end" mb="2" justifyContent="space-between">
          <Flex alignItems="center" flexDir="column" alignItems="flex-start">
            <Flex flexDir="column">
              <Heading size="lg">{frontEndTitle}</Heading>
            </Flex>
            {optional && (
              <Box
                background="#eee"
                textTransform="uppercase"
                fontSize="0.6em"
                px="1"
                py=".75"
                fontWeight="bold"
              >
                Optional Fee
              </Box>
            )}
          </Flex>

          <Flex flexDir="column" alignItems="flex-end">
            <Text fontSize="2xl" mb='0'>
             <Counter target={itemTotal} duration={2} />
            </Text>
            <Badge background="#2f8055" fontSize="0.6em" variant="solid">
              {frequency.replace(/([A-Z])/g, ' $1').trim()}
            </Badge>
          </Flex>
        </Flex>
        {description && <BodyText blocks={description} />}
      </Box>
    )
}
