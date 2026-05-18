type ResetProp = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Reset({ setCount }: ResetProp) {
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <button onClick={handleReset} className='p-2 rounded-2xl border'>
        Reset
      </button>
    </>
  );
}
