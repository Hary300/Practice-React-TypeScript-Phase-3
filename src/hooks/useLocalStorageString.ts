import { useEffect, useState } from 'react';

export default function useLocalStorageString(
  key: string,
  initialValue: string
) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
