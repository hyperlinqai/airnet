'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Testing...');
  const [tableInfo, setTableInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        // Test basic connection
        const { data, error: connError } = await supabase.from('broadbandplans').select('count');
        
        if (connError) {
          throw connError;
        }

        setConnectionStatus('Connected successfully to Supabase!');

        // Get table information
        const { data: tableData, error: tableError } = await supabase
          .from('broadbandplans')
          .select('*')
          .limit(1);

        if (tableError) {
          throw tableError;
        }

        // Get table structure
        if (tableData && tableData.length > 0) {
          const structure = Object.keys(tableData[0]).map(key => ({
            column: key,
            type: typeof tableData[0][key]
          }));
          setTableInfo(structure);
        } else {
          setTableInfo([]);
        }

      } catch (err: any) {
        setConnectionStatus('Connection failed');
        setError(err.message);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Connection Status:</h2>
        <p className={`p-4 rounded-lg ${
          connectionStatus.includes('successfully') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {connectionStatus}
        </p>
        {error && (
          <p className="mt-2 text-red-600">
            Error: {error}
          </p>
        )}
      </div>

      {tableInfo && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Table Structure:</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 border-b">Column</th>
                  <th className="text-left py-2 px-4 border-b">Type</th>
                </tr>
              </thead>
              <tbody>
                {tableInfo.map((info: any, index: number) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{info.column}</td>
                    <td className="py-2 px-4 border-b">{info.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-8">
        <p className="text-sm text-gray-600">
          Note: Make sure your .env file contains the correct Supabase URL and anon key:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
          {`NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key`}
        </pre>
      </div>
    </div>
  );
}
