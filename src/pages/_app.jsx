/* eslint-disable react/jsx-props-no-spreading, global-require, import/no-dynamic-require */

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/main.css';

export default function MyApp({ Component, pageProps, router }) {
  const { component, options } =
    (typeof Component?.layout === 'function' ? Component?.layout(router) : Component?.layout) ?? {};
  const Layout = require(`../layouts/${component || 'Main'}`).default;

  return (
    <ChakraProvider resetCSS>
      <Layout options={{ ...options }}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
