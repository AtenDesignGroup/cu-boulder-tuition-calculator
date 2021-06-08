import { LineItems } from '@/components/results/line-items'
import { showArray, totalGenerator, toFixedNumber } from '@/utils/results'
import {
  Text,
  Box,
  Heading,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Fade, ScaleFade, Slide, SlideFade, useDisclosure, Collapse, Button
} from '@chakra-ui/react'
import { MdInfo as InfoIcon } from 'react-icons/md'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'

export function Category({ category, questions }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box key={category._id} mb={10} p="30px" backgroundColor="#F7F6F7" className="printNoMargins">
      <Flex alignItems="center" mb={3} className="printNoMargins"  justifyContent="space-between">
        <Flex alignItems="center">

        <Box minW="60px">
        {category?.description && (
          <Button leftIcon={<InfoIcon />} color={isOpen ? "#A82E26" : "blue.500"} variant="link" onClick={onToggle}  fontSize="xs">{isOpen ? 'Close' : 'Info'}</Button>
        )}
        </Box>

          <Heading size="xl" color="gray.600">
          {category.title}
          </Heading>

          </Flex>

          <Text fontSize="2xl" mb="0">
            <Counter target={category.total} duration={2} />
          </Text>

      </Flex>

      {category?.description &&
        <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          mb="6"
          px="8"
          pt="7"
          pb="4"
          bg="#F0EFEF"
        >
        <BodyText blocks={category?.description} />
        </Box>
      </Collapse> }

      {category.lineItems &&
        category.lineItems !== undefined &&
        category.lineItems.length > 0 &&
        category?.lineItems
          .map(lineItem => {
            return (
              <LineItems
                key={lineItem._key}
                data={lineItem}
                catID={category._id}
                catTitle={category.title}
                itemTotal={totalGenerator(lineItem?.itemValue[0], questions)}
              />
            )
          })
          .filter(val => showArray(val.props.data, questions) === true)}

    </Box>
  )
}
