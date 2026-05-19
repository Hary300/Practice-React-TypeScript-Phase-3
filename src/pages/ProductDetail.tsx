import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Product not found</p>;
  }

  return <div>This is product {id}</div>;
}
