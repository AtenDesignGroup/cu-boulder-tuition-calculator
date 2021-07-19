import Error from 'next/error'
import { useRouter } from 'next/router'
import { getTuitionCalculatorDev } from '@/lib/sanity-api'
import { Box, Heading, Button } from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Layout } from '@/components/layout'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export default function Home({ pageData }) {
  const router = useRouter()

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />
  }

  const siteSettings = pageData[0] && pageData[0].siteSettings
  const tuitionCalculator = pageData[0] && pageData[0].tuitionCalculator
  const { questions } = tuitionCalculator

  function GetStarted() {
    router.push(`/dev/question/${questions[0]._id}`)
  }

  return (
    <Layout siteSettings={siteSettings} status={0} dev={true}>
      <Box mt={24}>

        <Heading mb={4}>{tuitionCalculator.title}</Heading>

        <BodyText blocks={tuitionCalculator.description} />

        <Button mt={6} variant="solid" shadow='md' background="#0277BD" color="#fff" _hover={{background: "#0277BD"}} _active={{background: "#0277BD"}} rightIcon={<FaArrowAltCircleRight />} onClick={() => GetStarted()}>
          {tuitionCalculator.buttonTitle}
        </Button>

      </Box>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageData = await getTuitionCalculatorDev(preview)
  return {
    props: { pageData, preview },
    revalidate: 60
  }
}
