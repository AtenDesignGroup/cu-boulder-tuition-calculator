import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CU Boulder: Tuition Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CU Boulder: Tuition Calculator" />
        <p className="description">
         coming soon
        </p>
      </main>

      <Footer />
    </div>
  )
}
