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
  useDisclosure
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
import { MdInfo as InfoIcon } from 'react-icons/md'

export function LineItems({ data, itemTotal }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
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

        <Flex alignItems="flex-end" mb="2" justifyContent="space-between" className="printNoMargins">

          <Flex alignItems="center" flexDir="column" alignItems="flex-start">

            <Flex alignItems="center">

              <Heading size="md" as='h3'>{frontEndTitle}</Heading>

              {description && (<>
                <IconButton
                variant="ghost"
                aria-label={`${frontEndTitle} description`}
                fontSize="20px"
                onClick={onOpen}
                icon={<InfoIcon />}
                className="printVisibilityHide"
              />
                <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{frontEndTitle}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                  <BodyText blocks={description} />
                  </ModalBody>
                </ModalContent>
              </Modal>
              </>
              )}

            </Flex>
            {optional && (
              <Box
                background="#eee"
                textTransform="uppercase"
                fontSize="xx-small"
                px="1"
                py=".75"
                fontWeight="bold"
              >
                Optional Fee
              </Box>
            )}
          </Flex>

          <Flex flexDir="column" alignItems="flex-end" className="printPriceWrapper">
            <Text fontSize="lg" mb='0' className="printPrice" order="1">
             <Counter target={itemTotal} duration={2} />
            </Text>
            <Badge background="#2f8055" fontSize="xx-small" variant="solid" className="printBadge" order="2">
              {frequency.replace(/([A-Z])/g, ' $1').trim()}
            </Badge>
          </Flex>
        </Flex>
        {/*description && <BodyText blocks={description} />*/}
      </Box>
    )
}
