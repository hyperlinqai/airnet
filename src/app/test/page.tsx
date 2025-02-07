'use client';

import { useEffect, useState } from 'react';
import { testSupabaseConnection } from '@/lib/test-connection';

export default function TestPage() {
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
    data?: any;
  }>({});

  useEffect(() => {
    async function runTest() {
      const result = await testSupabaseConnection();
      setStatus(result);
    }
    runTest();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
        {status.success === undefined ? (
          <div className="text-blue-600">Testing connection...</div>
        ) : status.success ? (
          <div className="text-green-600">
            ✅ Connection successful!
            <pre className="mt-2 bg-gray-50 p-2 rounded">
              {JSON.stringify(status.data, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="text-red-600">
            ❌ Connection failed:
            <pre className="mt-2 bg-red-50 p-2 rounded text-sm">
              {status.error}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
