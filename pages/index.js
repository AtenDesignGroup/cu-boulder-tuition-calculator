import Error from 'next/error'
import { useRouter } from 'next/router'
import { getHomePage } from '@/lib/sanity-api'

import { Layout } from '@/components/layout'

import { Calculator } from '@/components/calculator'

export default function Home ({ pageData, preview, cookies }) {

  const router = useRouter()

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />
  }

  const siteSettings = pageData[0] && pageData[0].siteSettings
  const tuitionCalculator = pageData[0] && pageData[0].tuitionCalculator
  const { questions } = tuitionCalculator

  return (
    <Layout siteSettings={siteSettings}>
      {(tuitionCalculator && questions) && <Calculator tuitionCalculator={tuitionCalculator} questions={questions} />}
    </Layout>
  )
}

export async function getStaticProps ({ preview = false }) {
  const pageData = await getHomePage(preview)
  return {
    props: { pageData, preview },
    // revalidate: 1
  }
}
