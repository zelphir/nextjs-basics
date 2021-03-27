/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
