import React from 'react';
import Link from 'next/link';
import { Center, Button } from '@chakra-ui/react';

export default function Login() {
  return (
    <Center bg="teal" w="100%" h="100%">
      <Center bg="white" w="280px" h="200px">
        <Link href="/" passHref>
          <Button as="a">Login</Button>
        </Link>
      </Center>
    </Center>
  );
}

Login.layout = {
  component: 'Empty',
};
