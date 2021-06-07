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
  useDisclosure
} from '@chakra-ui/react'
import { MdInfo as InfoIcon } from 'react-icons/md'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'

export function Category({ category, questions }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box key={category._id} mb={6} pb={2} borderBottom="2px solid #A2A4A3" className="printNoMargins">
      <Flex alignItems="center" mb={3} className="printNoMargins">
        <Heading size="xl" color="gray.600">
          {category.title}
        </Heading>

        {category?.description && (
          <>
            <IconButton
              variant="ghost"
              aria-label={`${category.title} description`}
              fontSize="20px"
              onClick={onOpen}
              icon={<InfoIcon />}
              className="printVisibilityHide"
            />
            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{category.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <BodyText blocks={category.description} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </Flex>

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

      <Flex justifyContent="space-between">
        <Heading textTransform="uppercase" size="sm" as="h3" color="gray.600">
          Sub Total
        </Heading>
        <Text fontSize="lg" mb="0" color="gray.600">
          <Counter target={category.total} duration={2} />
        </Text>
      </Flex>
    </Box>
  )
}
