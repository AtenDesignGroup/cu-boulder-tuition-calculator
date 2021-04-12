import { Flex, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Flex as='footer' width='100%' borderTop='1px solid #eaeaea' justifyContent='center' alignItems='center' paddingY='2rem'>
        <Text>Made with Nextjs and Hosted on Netlify</Text>
      </Flex>
    </>
  )
}
