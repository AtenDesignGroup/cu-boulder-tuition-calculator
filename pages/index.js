import { Head } from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Text } from "@chakra-ui/react"


export default function Home() {
  return (
    <>
    <Head title='CU Boulder: Tuition Calculator' />
    <div className="container">
      <main>
        <Header title="CU Boulder: Tuition Calculator" />
        <Text>
         coming soon
        </Text>
      </main>
      <Footer />
    </div>
    </>
  )
}
