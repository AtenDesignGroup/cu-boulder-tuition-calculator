import { LineItems } from '@/components/results/line-items'
import { showArray, totalGenerator, toFixedNumber } from '@/utils/results'
import {
  Text,
  Box,
  Heading,
  Flex,
  useDisclosure,
  Collapse,
  Button
} from '@chakra-ui/react'
import { MdInfo as InfoIcon } from 'react-icons/md'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'

export function Category({ category, questions }) {
  const { isOpen, onToggle } = useDisclosure()
// suppressHydrationWarning
  return (
    <Box key={category._id} mb={10} p="30px" backgroundColor="#F7F6F7" className="printNoMargins itemOuterWrapper">
      <Flex direction={{base: "column", md: "row"}}  alignItems={{base: "flex-start", md: "center"}} mb={4} className="printNoMargins" justifyContent="space-between" borderBottom={{base: "solid 1px #ccc", md: "none"}} pb={{base: '3', md: "0"}}>

        <Heading size="xl" fontWeight="400" mb={{ base: "1", md: "0"}} as='h3' suppressHydrationWarning={true}>
          {category.title}
        </Heading>

        <Flex alignItems="center">
          <Text fontSize="2xl" mb="0" suppressHydrationWarning={true}>
            <Counter target={category.total} duration={2} />
          </Text>

          <Box minW="52px" order="3" textAlign="right" ml="24px">
            {category?.description && (
              <Button
                leftIcon={<InfoIcon />}
                color={isOpen ? '#A82E26' : 'blue.600'}
                variant="link"
                onClick={onToggle}
                fontSize="xs"
                aria-expanded={isOpen ? true : false}
                aria-label={`${category.title} info`}
              >
                {isOpen ? 'Close' : 'Info'}
              </Button>
            )}
          </Box>

          </Flex>
      </Flex>

      {category?.description && (
        <Collapse in={isOpen} animateOpacity>
          <Box mb="6" px="24px" pt="20px" pb="10px" bg="#fff" border="1px solid #A2A4A3">
            <BodyText blocks={category?.description} />
          </Box>
        </Collapse>
      )}
      { ' ' }
      {category.lineItems
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
// category.lineItems &&
//         category.lineItems !== undefined &&
//         category.lineItems.length > 0 &&
//         category?.lineItems