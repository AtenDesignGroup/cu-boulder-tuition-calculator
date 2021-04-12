import { getSiteSettings } from '@/lib/api'
import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { Text, Flex } from "@chakra-ui/react"

export default function Home({siteSettings}) {
  return (
    <Layout siteSettings={siteSettings}>
      <Flex paddingY={'5rem'} flex='1' flexDir='column' justifyContent='center' alignItems='center'>
        <Header title={siteSettings.title} />
        <Text>
         coming soon
        </Text>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  return {
    props: { siteSettings },
    revalidate: 1
  }
}