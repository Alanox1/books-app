import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: {
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          boxSizing : "border-box",
          padding : "0px 20px 20px 20px",
          backgroundColor : "#D2B48C"
        },
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  })

export default theme