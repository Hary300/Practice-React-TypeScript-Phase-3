import useLocalStorage from '../hooks/useLocalStorage';

export default function Profile() {
  const [username, setUsername] = useLocalStorage<string>('username', '');

  return (
    <div>
      <h2>Profile</h2>
      <p>Your username: {username}</p>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Write your username...'
      />
    </div>
  );
}
