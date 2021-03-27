import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

export default function Post() {
  const router = useRouter();
  const handleOnClick = () => router.push('/test');

  return (
    <div>
      I am the post <Button onClick={handleOnClick}>Go to test</Button>
    </div>
  );
}
