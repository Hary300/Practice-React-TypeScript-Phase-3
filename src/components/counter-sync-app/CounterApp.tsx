import { useState } from 'react';
import Display from './Display';
import DecrementIncrement from './DecremmentIncrement';
import Reset from './Reset';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DecrementIncrement setCount={setCount} />
      <Display count={count} />
      <Reset setCount={setCount} />
    </div>
  );
}
