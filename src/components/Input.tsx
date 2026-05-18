import useInput from './../hooks/useInput';

export default function Input() {
  const { value, onChange, reset } = useInput();

  return (
    <div>
      <h2>Input useInput</h2>
      <p>Hello, {value}</p>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Write something...'
        className='px-4 py-2 rounded-2xl '
      />

      <button onClick={reset}>RESET</button>
    </div>
  );
}
