type LoginPageProps = {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
};

export default function LoginPage({
  setAuthenticated,
  onSuccess,
}: LoginPageProps) {
  function handleClick() {
    setAuthenticated(true);
    onSuccess();
  }
  return (
    <>
      <button
        className='px-4 py-2 rounded-2xl bg-blue-500 text-white cursor-pointer'
        onClick={handleClick}
      >
        Login
      </button>
    </>
  );
}
