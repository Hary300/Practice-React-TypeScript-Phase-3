import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Role, User } from '../types/auth';

type LoginPageProps = {
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export default function LoginPage({ setUser }: LoginPageProps) {
  const [roleInput, setRoleInput] = useState<Role>('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setUser((prev) => ({
      ...prev,
      isAuthenticated: true,
      role: roleInput,
    }));

    if (roleInput === 'admin') {
      navigate('/admin');
      return;
    }

    if (roleInput === 'user') {
      navigate('/user');
      return;
    }

    setError(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRoleInput(event.target.value as Role);
    setError(false);
  }

  return (
    <div>
      <div className='flex items-center gap-2'>
        <div
          className={`border p-4 w-fit rounded-2xl ${error ? 'border-red-500' : ''}`}
        >
          <div className='flex gap-4'>
            <input
              type='radio'
              name='role'
              id='user'
              value='user'
              checked={roleInput === 'user'}
              onChange={handleChange}
            />
            <label htmlFor='user'>Users</label>
          </div>
          <div className='flex gap-4'>
            <input
              type='radio'
              name='role'
              id='admin'
              value='admin'
              checked={roleInput === 'admin'}
              onChange={handleChange}
            />
            <label htmlFor='admin'>Admin</label>
          </div>
        </div>
        {error && <p className='text-red-500 '>Choose role first</p>}
      </div>

      <button
        onClick={handleClick}
        className='px-4 py-1 bg-blue-500 text-white  rounded-2xl cursor-pointer scale-100 transition active:scale-98'
      >
        Login
      </button>
    </div>
  );
}
