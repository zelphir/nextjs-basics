import React from 'react';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const { query } = useRouter();
  const { post } = query;

  return <div>Blog post - slug: {post}</div>;
}
