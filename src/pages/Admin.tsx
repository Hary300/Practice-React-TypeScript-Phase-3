import type { User } from '../types/auth';

type AdminProps = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export default function Admin({ setUser }: AdminProps) {
  function handleClick() {
    setUser((prev) => ({ ...prev, isAuthenticated: false, role: '' }));
  }
  return (
    <div>
      <button
        className='px-4 py-2 bg-amber-100 text-black rounded-2xl cursor-pointer scale-100 transition active:scale-98'
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}
