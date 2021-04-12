import { ChakraProvider } from '@chakra-ui/react'
import cuTheme from '@/theme/index'

import '@/styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={cuTheme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp