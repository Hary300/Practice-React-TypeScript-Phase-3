import useCounter from '../hooks/useCounter';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
