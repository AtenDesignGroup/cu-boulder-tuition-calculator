import { StateMachineProvider, createStore } from 'little-state-machine'

import { ChakraProvider } from '@chakra-ui/react'
import cuTheme from '@/theme/index'

import '@/styles/globals.css'

createStore(
  {
    calculator: {
      currentQuestion: 0,
      showResults: false,
      questions: []
    }
  }
)
// createStore(
//   {
//     tuitionCalculator: {

//      } // it's an object of your state
//   },
//   {
//      name?: string; // rename the store
//      middleWares?: [ log ]; // function to invoke each action
//      storageType?: Storage; // session/local storage (default to session)
//   },
// );

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
