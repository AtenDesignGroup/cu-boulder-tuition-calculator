import { StateMachineProvider, createStore } from 'little-state-machine'

import { ChakraProvider } from '@chakra-ui/react'
import cuTheme from '@/theme/index'

import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"
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
  return (
    <StateMachineProvider>
      <ChakraProvider theme={cuTheme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateMachineProvider>
  )
}

export default MyApp
