import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '@/lib/ga'

import { StateMachineProvider, createStore } from 'little-state-machine'

import { ChakraProvider } from '@chakra-ui/react'
import cuTheme from '@/theme/index'

import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto-condensed/400.css"
import "@fontsource/roboto-condensed/700.css"
import '@/styles/globals.css'

createStore(
  {
    calculator: {
      currentQuestion: 0,
      lastQuestion: null,
      showResults: false,
      questions: [],
      results: [],
      totalSemesters: 1
    }
  }
)

function MyApp ({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <StateMachineProvider>
      <ChakraProvider theme={cuTheme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateMachineProvider>
  )
}

export default MyApp
