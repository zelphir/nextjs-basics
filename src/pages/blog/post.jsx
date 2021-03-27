import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@chakra-ui/react';

export default function Post() {
  const router = useRouter();
  const handleOnClick = () => router.push('/test');

  return (
    <>
      <Head>
        <title>I am the post</title>
        <meta description="descr..." />
      </Head>

      <div>
        I am the post <Button onClick={handleOnClick}>Go to test</Button>
      </div>
    </>
  );
}
