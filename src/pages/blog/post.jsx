import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@chakra-ui/react';

import Div from '../../components/Div';

export default function Post() {
  const router = useRouter();
  const handleOnClick = () => router.push('/test');

  return (
    <>
      <Head>
        <title>I am the post</title>
        <meta description="descr..." />
      </Head>

      <Div>
        I am the post <Button onClick={handleOnClick}>Go to test</Button>
      </Div>
      <div className="yo">Yo!</div>
      <style jsx>
        {`
          .yo {
            background: teal;
            padding: 30px;
          }
        `}
      </style>
      {/*
      <style global jsx>
        {`
          body {
            padding-top: 60px;
          }
        `}
      </style>
      */}
    </>
  );
}
