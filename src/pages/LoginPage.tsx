type LoginPageProps = {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({ setAuthenticated }: LoginPageProps) {
  function handleClick() {
    setAuthenticated(true);
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
