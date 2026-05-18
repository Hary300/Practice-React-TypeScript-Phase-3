import useLocalStorage from '../hooks/useLocalStorage';
import { darkIcon, lightIcon } from './icons/toggleIcons';

export default function DarkMode() {
  const [dark, setDark] = useLocalStorage<boolean>('dark-mode', false);

  function toggleDarkMode() {
    setDark((prev) => !prev);
  }

  return (
    <div>
      <h2>Dark Mode</h2>
      <p>{`${dark ? 'Dark Mode' : 'Light Mode'} is active`}</p>
      <button
        className='rounded-full p-1 flex justify-center items-center border cursor-pointer'
        onClick={toggleDarkMode}
      >
        {dark ? lightIcon : darkIcon}
      </button>
    </div>
  );
}
