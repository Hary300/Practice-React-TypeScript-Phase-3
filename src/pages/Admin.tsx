import { useNavigate } from 'react-router-dom';

type UserProfileProps = {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Admin({ setAuthenticated }: UserProfileProps) {
  const navigate = useNavigate();

  function handleClick() {
    setAuthenticated(false);
    navigate('/login');
  }
  return (
    <div>
      <h1>Hello admin</h1>
      <button
        className='px-4 py-2 rounded-2xl bg-green-500 text-white cursor-pointer'
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}
