import { useState } from 'react';

export default function useInput() {
  const [value, setValue] = useState<string>('');

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function reset() {
    setValue('');
  }

  return {
    value,
    onChange,
    reset,
  };
}
