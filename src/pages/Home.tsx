import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleClickLogin() {
    navigate('/dashboard', { replace: true });
  }

  function handleClickAbout() {
    navigate('/about');
  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <div className='flex gap-4'>
        <button
          className='px-4 py-2 rounded-2xl cursor-pointer bg-blue-500 text-white'
          onClick={handleClickAbout}
        >
          Go to About
        </button>

        <button
          className='px-4 py-2 rounded-2xl cursor-pointer bg-amber-500 text-white'
          onClick={handleClickLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
