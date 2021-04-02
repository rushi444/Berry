import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import { useApollo } from '../apollo/client'

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApollo()
  return (
    <>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS={true}>
          <Head>
            <title>Berry.js</title>
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default App
