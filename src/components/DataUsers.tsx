import useLocalStorage from '../hooks/useLocalStorage';
import { dataUsers } from './../data/dataUsers';

type User = {
  id: number;
  name: string;
  age: number;
};

export default function DataUsers() {
  const [users, setUsers] = useLocalStorage<User[]>('users', dataUsers);

  function handleDelete(id: number) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <div>
      <h1>Data users</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
