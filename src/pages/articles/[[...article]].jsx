import React from 'react';
import { useRouter } from 'next/router';

export default function Articles() {
  const { query } = useRouter();
  const [year, title] = query?.article || [];

  if (title) {
    return (
      <>
        <h1>{title}</h1>
        <span>{year}</span>
      </>
    );
  }

  return <div>Articles</div>;
}
