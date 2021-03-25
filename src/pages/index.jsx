import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container centerContent>
        <Heading>Next.js Basics</Heading>
        <Text>Edgemony coding bootcamp</Text>
      </Container>
    </Layout>
  );
}
