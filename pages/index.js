import { getSiteSettings } from '@/lib/api'
import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { Text, Flex, Box } from "@chakra-ui/react"
import { Question } from '@/components/Question'
import {Form} from '@/components/form'

export default function Home({siteSettings}) {
  return (
    <Layout siteSettings={siteSettings}>
      <Flex paddingY={'5rem'} flex='1' flexDir='column' justifyContent='center' alignItems='center'>
        <Header title={siteSettings.title} />
        <Text>
         coming soon
        </Text>

        <Box mt='4rem' width='full'><Question /></Box>
      </Flex>
    </Layout>
  )
}
// <Box>
// <Form _id='feedback' />
// </Box>
export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  return {
    props: { siteSettings },
    revalidate: 1
  }
}