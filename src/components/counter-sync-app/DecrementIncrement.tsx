type DecrementIncrementProp = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function DecrementIncrement({
  setCount,
}: DecrementIncrementProp) {
  function handleDecrement() {
    setCount((prev) => prev - 1);
  }
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement} className='p-2  rounded-2xl border'>
        -
      </button>
      <button onClick={handleIncrement} className='p-2  rounded-2xl border'>
        +
      </button>
    </div>
  );
}
