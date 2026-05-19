import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <h1>This is About page</h1>
      <button
        className='px-4 py-2 rounded-2xl cursor-pointer bg-green-500 text-white'
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
}
