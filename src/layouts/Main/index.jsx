import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Flex, Box, Container, HStack, Heading, StackDivider } from '@chakra-ui/react';

export default function Layout({ children, options }) {
  return (
    <>
      <Head>
        <title>My cool project</title>
      </Head>
      <Flex flexDirection="column">
        <Box bg="#34c4afff" w="100%" p={4} color="white" mb="6">
          <HStack divider={<StackDivider borderColor="gray.200" />}>
            <Link href="/">
              <a>
                <Heading as="h1" size="md">
                  My cool project
                </Heading>
              </a>
            </Link>
            <Link href="/test">
              <a>Test</a>
            </Link>
            <Link href="/test/new">
              <a>New Test</a>
            </Link>
            <Link href="/blog/post">
              <a>Post</a>
            </Link>
          </HStack>
        </Box>
        <Container centerContent={options.centerContent ?? true}>{children}</Container>
      </Flex>
    </>
  );
}
