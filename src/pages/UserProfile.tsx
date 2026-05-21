import type { User } from '../types/auth';

type UserProfileProps = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export default function UserProfile({ setUser }: UserProfileProps) {
  function handleClick() {
    setUser((prev) => ({ ...prev, isAuthenticated: false, role: '' }));
  }

  return (
    <div className='bg-gray-700 rounded-2xl p-4 w-fit text-gray-200 flex flex-col gap-4'>
      <h1>This is Your Profile</h1>
      <p>Good morning, Harry</p>
      <p>Hope you are happy</p>

      <button
        className='bg-amber-100 text-black rounded-2xl cursor-pointer scale-100 transition active:scale-98'
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}
