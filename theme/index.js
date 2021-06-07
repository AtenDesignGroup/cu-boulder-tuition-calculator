import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = ['360px', '768px', '980px', '1044px', '1440px']
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const cuTheme = extendTheme({
  colors: {
    brand: {
      50: '#ece4ff',
      100: '#c4b2ff',
      200: '#9d80ff',
      300: '#754dff',
      400: '#4f1bfe',
      500: '#3601e5',
      600: '#2900b3',
      700: '#1c0081',
      800: '#10004f',
      900: '#060020'
    },
    blue: {
      500: '#0277BD'
    },
    yellow: {
      500: '#CFB87C'
    },
  },
  breakpoints,
  fonts: {
    heading: `"Roboto Condensed",-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif`,
    body: `"Roboto",-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif`

  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        fontFamily: `"Roboto",-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif`
      },
      h1: {
        fontFamily: `heading`
      },
      ul: {
        margin: `1rem 0 1rem 2rem !important`
      },
      li: {
        marginBottom: `.5rem`
      },
      p: {
        marginBottom: `.75rem`,
        a: {
          textDecoration: 'underline',
          cursor: 'pointer',
          _hover: {
            textDecoration: 'none'
          }
        }
      }
    })
  }
})

export default cuTheme