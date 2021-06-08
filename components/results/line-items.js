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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Collapse,
  Button
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
    <Box mb="6" className="printNoMargins" width="100%">
      <Flex
        alignItems="center"
        mb="5"
        justifyContent="space-between"
        className="printNoMargins"
        width="100%"
      >
        <Flex alignItems="center" flexDir="column" alignItems="flex-start" width="100%" position="relative"
        _after={{content: "''", position: "absolute", width: "100%", height: "1px", background: "#ccc", left: "0", right: "0", top: "0", bottom:"0", margin: "auto", zIndex: "0"}}>
            <Heading size="md" as="h3" background="#F7F6F7" zIndex="1" pr="24px">
              {frontEndTitle}
            </Heading>

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

        <Flex flexDir="row" alignItems="center" className="printPriceWrapper">

          <Box order="3" ml="24px" textAlign="right">
            <Text fontSize="md" fontWeight="bold" mb="0" className="printPrice" order="1">
              <Counter target={itemTotal} duration={2} />
            </Text>
          </Box>

          <Box minW="78px" order="3" ml="26px" textAlign="right" ml="24px">
          <Text
            color="#565A5C"
            fontSize="xs"
            variant="solid"
            className="printBadge"
            order="2"
            my="0"
          >
            {capitalize(frequency.replace(/([A-Z])/g, ' $1').trim())}
          </Text>
          </Box>

          <Box minW="52px" order="3" textAlign="right" ml="24px">
            {description && (
              <Button
                leftIcon={<InfoIcon />}
                color={isOpen ? '#A82E26' : 'blue.500'}
                variant="link"
                onClick={onToggle}
                size="xs"
                py="12px"
                pr="0"
                mr="0"
                alignItems="end"
              >
                {isOpen ? 'Close' : 'Info'}
              </Button>
            )}
          </Box>
        </Flex>
      </Flex>

      {description && (
        <Collapse in={isOpen} animateOpacity>
          <Box p="40px" mt="0" px="20px" pt="24px" pb="12px" bg="#FFF" border="1px solid #A2A4A3">
            <BodyText blocks={description} />
          </Box>
        </Collapse>
      )}
    </Box>
  )
}
