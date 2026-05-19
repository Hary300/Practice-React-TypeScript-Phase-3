import { useParams } from 'react-router-dom';

type PostParams = {
  username: string;
  id: string;
};

export default function Post() {
  const { username, id } = useParams<PostParams>();

  if (!username || !id) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <p>Username: {username}</p>
      <p>Post ID: {id}</p>
    </div>
  );
}
