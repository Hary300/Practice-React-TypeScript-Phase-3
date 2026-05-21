import { useNavigate } from 'react-router-dom';

type LoginPageProps = {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({ setAuthenticated }: LoginPageProps) {
  const navigate = useNavigate();
  function handleClick() {
    setAuthenticated(true);
    navigate('/profile');
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className='px-4 py-1 bg-blue-500 text-white  rounded-2xl cursor-pointer scale-100 transition active:scale-98'
      >
        Login
      </button>
    </div>
  );
}
