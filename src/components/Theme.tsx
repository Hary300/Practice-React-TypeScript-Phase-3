import useLocalStorage from '../hooks/useLocalStorage';

export default function Theme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <h1>Dark Theme</h1>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Set Theme</button>
    </div>
  );
}
