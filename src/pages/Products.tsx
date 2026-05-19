import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
};

export default function Products() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useFetch<Product>(
    `https://dummyjson.com/products/${id}`
  );

  if (!id) {
    return <p>Product not found</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='rounded-2xl overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)] max-w-70  p-8 flex flex-col gap-5'>
      <div className='size-full rounded-2xl overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)] m-auto'>
        <img
          src={`${data?.images[0]}`}
          alt={`${data?.title} image`}
          className='size-full'
        />
      </div>
      <div className='text'>
        <p>Product Name: {data?.title}</p>
        <p>Price: {data?.price}</p>
        <p>Category: {data?.category}</p>
      </div>
    </div>
  );
}
