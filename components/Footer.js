import { Flex, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Flex as='footer' width='100%' borderTop='1px solid #eaeaea' justifyContent='center' alignItems='center' py='5' mt='16'>
        <Text fontSize='xs' color='gray.600'>Powered by <a href="https://sanity.io" rel="noopener noreferrer" target="_blank">Sanity.io</a></Text>
      </Flex>
    </>
  )
}
