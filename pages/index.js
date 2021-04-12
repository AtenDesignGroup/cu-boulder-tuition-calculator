import { getSiteSettings } from '@/lib/api'

import { Head } from '@/components/Head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Text } from "@chakra-ui/react"
import { Layout } from '@/components/Layout'

export default function Home({siteSettings}) {
  return (
    <>
    <Head title={siteSettings.seoSettings.title} description={siteSettings.seoSettings.description} />
    <Layout>
    <div className="container">
      <main>
        <Header title={siteSettings.title} />
        <Text>
         coming soon
        </Text>
      </main>
      <Footer />
    </div>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  return {
    props: { siteSettings },
    revalidate: 1
  }
}