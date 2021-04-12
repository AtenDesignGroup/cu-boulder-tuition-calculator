import { Head } from '@/components/Head'
import Footer from '@/components/Footer'

import { Text, Flex} from "@chakra-ui/react"

export function Layout({ children, siteSettings }) {
  return (
    <>
    <Head title={siteSettings?.seoSettings?.title} description={siteSettings?.seoSettings?.description} />
    <Flex height='100vh' flexDir='column' justifyItems='center' alignItems='center'>
      {children}
      <Footer />
    </Flex>
    </>
  )
}