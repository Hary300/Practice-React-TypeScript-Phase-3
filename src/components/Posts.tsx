import useFetch from '../hooks/useFetch';

type Post = {
  id: number;
  title: string;
};

export default function Posts() {
  const { data, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ol>
      {data?.map((post) => (
        <li key={post.id}>
          <p>Post Title: {post.title}</p>
        </li>
      ))}
    </ol>
  );
}
