import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleGenre(genre: string) {
    setSearchParams({ genre });
  }

  const genre = searchParams.get('genre');

  const genres = ['action', 'comedy', 'horror'];

  return (
    <div>
      <h1>Movies page</h1>
      <div className='flex gap-2'>
        {genres.map((genreName) => {
          const isActive = genreName === genre;
          return (
            <button
              key={genreName}
              className={`px-4 py-2 rounded-2xl border cursor-pointer 
                ${isActive ? 'bg-gray-800 text-white' : ''}`}
              onClick={() => handleGenre(genreName)}
            >
              {genreName}
            </button>
          );
        })}
      </div>

      <p>Current Genre: {genre ?? 'none'}</p>
    </div>
  );
}

// button without loop
{
  /* <div className='flex gap-2'>
        <button
          className='px-4 py-2 rounded-2xl border cursor-pointer'
          onClick={() => handleGenre('action')}
        >
          Action
        </button>
        <button
          className='px-4 py-2 rounded-2xl border cursor-pointer'
          onClick={() => handleGenre('comedy')}
        >
          Comedy
        </button>
        <button
          className='px-4 py-2 rounded-2xl border cursor-pointer'
          onClick={() => handleGenre('horror')}
        >
          Horror
        </button>
      </div> */
}
