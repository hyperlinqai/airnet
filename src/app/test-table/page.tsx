'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestTable() {
  const [tableData, setTableData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTableStructure() {
      try {
        const { data, error } = await supabase
          .from('broadbandplans')
          .select('*')
          .limit(1);

        if (error) throw error;

        if (data && data.length > 0) {
          setTableData(data[0]);
        }
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchTableStructure();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Broadbandplans Table Structure</h1>
      
      {error && (
        <div className="text-red-600 mb-4">
          Error: {error}
        </div>
      )}

      {tableData && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Columns:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            {JSON.stringify(tableData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
