import { Flex, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Flex as='footer' width='100%' borderTop='1px solid #eaeaea' justifyContent='center' alignItems='center' pt='6' pb='12' mt='auto'>
        <Text>Powered by Sanity.io</Text>
      </Flex>
    </>
  )
}
