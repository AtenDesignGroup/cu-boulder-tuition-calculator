import { StateMachineProvider, createStore } from 'little-state-machine'

import { ChakraProvider } from '@chakra-ui/react'
import cuTheme from '@/theme/index'

import '@/styles/globals.css'

createStore({})

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
