import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column">
      <Box bg="#34c4afff" w="100%" p={4} color="white" mb="6">
        My cool project
      </Box>
      {children}
    </Flex>
  );
}
