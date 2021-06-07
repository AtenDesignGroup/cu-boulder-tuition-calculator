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
  PopoverCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Fade, ScaleFade, Slide, SlideFade, useDisclosure, Collapse, Button
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
import { MdInfo as InfoIcon } from 'react-icons/md'


import { capitalize } from '@/utils/results'

export function LineItems({ data, itemTotal }) {
  const { isOpen, onToggle } = useDisclosure()

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
      <Box mb="6" className="printNoMargins">

        <Flex alignItems="center" mb="5" justifyContent="space-between" className="printNoMargins">

          <Flex alignItems="center" flexDir="column" alignItems="flex-start">

            <Flex alignItems="center">

            {description && (
              <Button leftIcon={<InfoIcon />} color={isOpen ? "#A82E26" : "blue.500"} variant="link" onClick={onToggle} pr="24px" fontSize="xs">{isOpen ? 'Close' : 'Info'}</Button>
            )}

            <Heading size="md" as='h3' mr="24px">{frontEndTitle}</Heading>

            {optional && (
              <Text
                //background="#eee"
                textTransform="uppercase"
                fontSize="xx-small"
                fontWeight="bold"
                mb="0"
                ml="24px"
                color="#565A5C"
              >
                Optional Fee
              </Text>
            )}

            </Flex>

          </Flex>

          <Flex flexDir="row" alignItems="center" className="printPriceWrapper">
            <Text fontSize="md" fontWeight="bold" mb='0' className="printPrice" order="1">
             <Counter target={itemTotal} duration={2} />
            </Text>
            <Text color="#565A5C" fontSize="xs" variant="solid" className="printBadge" order="2" my="0" ml="24px">
              {capitalize(frequency.replace(/([A-Z])/g, ' $1').trim())}
            </Text>
          </Flex>


        </Flex>
        {/*description && <BodyText blocks={description} />*/}
        {description &&
          <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            mt="2"
            px="8"
            pt="7"
            pb="4"
            bg="#F0EFEF"
          >
          <BodyText blocks={description} />
          </Box>
        </Collapse> }
      </Box>
    )
}
