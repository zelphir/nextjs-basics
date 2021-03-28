import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (document.cookie !== 'auth=true') {
      router.push('/login');
    }
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <div>Checking auth...</div>;

  return <div>Dashboard</div>;
}
