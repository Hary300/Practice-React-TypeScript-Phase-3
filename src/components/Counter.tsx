import useCounter from '../hooks/useCounter';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
