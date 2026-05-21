import { useNavigate } from 'react-router-dom';

type UserProfileProps = {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserProfile({ setAuthenticated }: UserProfileProps) {
  const navigate = useNavigate();

  function handleClick() {
    setAuthenticated(false);
    navigate('/login');
  }
  return (
    <>
      <h1>this is your profile page</h1>
      <button
        className='px-4 py-2 rounded-2xl bg-blue-500 text-white cursor-pointer'
        onClick={handleClick}
      >
        Logout
      </button>
    </>
  );
}
