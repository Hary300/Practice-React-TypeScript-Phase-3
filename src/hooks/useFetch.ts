import { useEffect, useState } from 'react';

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string;
};

export default function useFetch<T>(url: string): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result: T = await res.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown Error');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
