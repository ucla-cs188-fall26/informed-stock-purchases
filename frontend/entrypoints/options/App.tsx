import { useEffect, useState } from 'react';
import { BACKEND_URL } from '@/lib/config';

export function App() {
  const [status, setStatus] = useState<'checking' | 'ok' | 'down'>('checking');

  useEffect(() => {
    fetch(`${BACKEND_URL}/health`)
      .then((r) => setStatus(r.ok ? 'ok' : 'down'))
      .catch(() => setStatus('down'));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24, maxWidth: 560 }}>
      <h1 style={{ fontSize: 20 }}>Informed Stock Purchases</h1>
      <p>
        Backend ({BACKEND_URL}):{' '}
        <strong>{status === 'checking' ? 'Checking…' : status === 'ok' ? 'Connected' : 'Not reachable'}</strong>
      </p>
      <p style={{ color: '#57606a', fontSize: 13 }}>Settings will go here.</p>
    </main>
  );
}
