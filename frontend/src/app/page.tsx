'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (backendUrl) {
      fetch(backendUrl)
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(() => setMessage('Error fetching backend'));
    } else {
      setMessage('Backend URL not defined');
    }
  }, [backendUrl]);

  return (
    <main>
      <h1>Next.js Frontend</h1>
      <p>{message}</p>
    </main>
  );
}
