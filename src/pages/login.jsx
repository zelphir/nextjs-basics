import React from 'react';
import { Center, Button } from '@chakra-ui/react';

export default function Login() {
  return (
    <Center bg="teal" w="100%" h="100%">
      <Center bg="white" w="280px" h="200px">
        <Button>Login</Button>
      </Center>
    </Center>
  );
}

Login.layout = {
  component: 'Empty',
};
