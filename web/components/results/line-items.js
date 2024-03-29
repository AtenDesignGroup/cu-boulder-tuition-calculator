import {
  Heading,
  Box,
  Text,
  Flex,
  useDisclosure,
  Collapse,
  Button
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
import { MdInfo as InfoIcon } from 'react-icons/md'

import { capitalize } from '@/utils/results'

export function LineItems({ data, itemTotal, dev }) {
  const { isOpen, onToggle } = useDisclosure()

  const {
    description,
    frontEndTitle,
    frequency,
    optional,
    title
  } = data


  function Description({description}) {
    if(description?.length === 1 && description[0]?.children[0]?.text === ''){
      return null
    } else {
      return (
        <Collapse in={isOpen} animateOpacity>
            <Box px="24px" pt="20px" pb="10px" bg="#fff" border="1px solid #A2A4A3" className='description'>
              <BodyText blocks={description} />
            </Box>
          </Collapse>
      )
    }
  }

  function DescriptionButton({description}) {
    if(description?.length === 1 && description[0]?.children[0]?.text === ''){
      return null
    } else {
      return (
        <Button
          leftIcon={<InfoIcon />}
          color={isOpen ? '#A82E26' : 'blue.600'}
          variant="link"
          onClick={onToggle}
          size="xs"
          py="12px"
          pr="0"
          mr="0"
          alignItems="end"
          aria-expanded={isOpen ? true : false}
          aria-label={`${frontEndTitle} info`}
          >
          {isOpen ? 'Close' : 'Info'}
          </Button>
      )
    }
  }

  return (
    <>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        mb="6"
        pb={{base: "3", md: "0"}}
        justifyContent="space-between"
        className="printNoMargins itemInnerWrapper"
        width="100%"
        borderBottom={{base: "solid 1px #ccc", md: "none"}}
        flexWrap={{ base: 'wrap'}}
      >
        <Flex
         flex={{base: '1'}}
          flexDir={{base: "column", lg: "row"}}
          alignItems={{base: "start", lg: "center"}}
          justifyContent="start"
          width="100%"
          position="relative"
          mb={{base: "1", md: "0"}}
          flexWrap="wrap"
          _after={{ md: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: '#ccc',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            margin: 'auto',
            zIndex: '0'
          }}}
        >
          <Heading size="md" as="h3" background="#F7F6F7" zIndex="1" pr={{md: "24px"}} suppressHydrationWarning={true}  onClick={() => {navigator.clipboard.writeText(title)}}>
            {frontEndTitle}
          </Heading>

          {optional && (
            <Text
              background="#F7F6F7" zIndex="1"
              pr={{md: "24px"}}
              display="block"
              fontSize="xx-small"
              color="#565A5C"
              mt={{base: "2", lg: "0"}}
              mb="0"
              suppressHydrationWarning={true}
            >
            Included in COA
            </Text>
          )}
        </Flex>

        <Flex flexDir="row" alignItems="center" className="printPriceWrapper">
          <Box order="3" ml={{base: "0", md: "24px"}} textAlign="right">
            <Text fontSize="md" fontWeight="bold" mb="0" className="printPrice" order="1" suppressHydrationWarning={true}>
              <Counter target={itemTotal} duration={0} />
            </Text>
          </Box>

          <Box minW="78px" order="3" textAlign="right" ml="24px">
            <Text
              color="#565A5C"
              fontSize="xs"
              variant="solid"
              className="printBadge"
              order="2"
              my="0"
              suppressHydrationWarning={true}
            >
              {capitalize(frequency.replace(/([A-Z])/g, ' $1').trim())}
            </Text>
          </Box>

          <Box minW="52px" order="3" textAlign="right" ml="24px">
          {description && (
              <DescriptionButton description={description} />
            )}
          </Box>
        </Flex>

        {dev && <Flex flex='none' width='100%' marginTop='1'>  <small style={{fontSize: '12px', color: '#6b6b6b'}}>{title}</small></Flex>}

      </Flex>

      {description && (
        <Description description={description} />
      )}
    </>
  )
}
