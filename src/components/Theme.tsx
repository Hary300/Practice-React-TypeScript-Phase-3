import useLocalStorageString from '../hooks/useLocalStorageString';

export default function Theme() {
  const [theme, setTheme] = useLocalStorageString('theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <h2>Dark Theme</h2>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Set Theme</button>
    </div>
  );
}
