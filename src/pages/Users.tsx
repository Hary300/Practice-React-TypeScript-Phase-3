import { useParams } from 'react-router-dom';

export default function Users() {
  const { username } = useParams<{ username: string }>();

  if (!username) {
    return <p>Page not Found</p>;
  }

  return (
    <div>
      <p>Hello {username}</p>
      <p>This is {username}'s page</p>
    </div>
  );
}
