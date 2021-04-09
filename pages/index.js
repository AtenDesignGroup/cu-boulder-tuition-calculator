import { Head } from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
    <Head title='CU Boulder: Tuition Calculator' />
    <div className="container">
      <main>
        <Header title="CU Boulder: Tuition Calculator" />
        <p className="description">
         coming soon
        </p>
      </main>
      <Footer />
    </div>
    </>
  )
}
