import { useRouter } from 'next/router'
import { Layout } from '@/components/layout'
import { Results } from '@/components/results'
import { getTuitionCalculator } from '@/lib/sanity-api'

export default function ResultsPage({pageData}) {

  const router = useRouter()

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />
  }
  const siteSettings = pageData[0] && pageData[0].siteSettings
  const tuitionCalculator = pageData[0] && pageData[0].tuitionCalculator
  const { questions, categories } = tuitionCalculator

  return (
    <Layout siteSettings={siteSettings} status={100}>
      <Results categories={categories} tuitionCalculator={tuitionCalculator} />
    </Layout>
  )
}

export async function getStaticProps ({ preview = false }) {
  const pageData = await getTuitionCalculator(preview)
  return {
    props: { pageData, preview },
    revalidate: 60
  }
}