import Error from 'next/error'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout'
import { Results } from '@/components/results'
import { getTuitionCalculatorDev } from '@/lib/sanity-api'

export default function ResultsPage({pageData}) {

  const router = useRouter()

  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />
  }
  const siteSettings = pageData[0] && pageData[0].siteSettings
  const tuitionCalculator = pageData[0] && pageData[0].tuitionCalculator
  const { categories } = tuitionCalculator

  return (
    <Layout siteSettings={siteSettings} status={100} dev={true}>
      <Results categories={categories} tuitionCalculator={tuitionCalculator} dev={true} />
    </Layout>
  )
}

export async function getStaticProps ({ preview = false }) {
  const pageData = await getTuitionCalculatorDev(preview)
  return {
    props: { pageData, preview },
    revalidate: 60
  }
}