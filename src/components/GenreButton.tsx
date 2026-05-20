import type { SetURLSearchParams } from 'react-router-dom';

type GenreButtonProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  genre: string | null;
};

export default function GenreButton({
  searchParams,
  setSearchParams,
  genre,
}: GenreButtonProps) {
  const genres = ['pop', 'rock', 'jazz'];
  function handleGenre(genre: string) {
    const params = new URLSearchParams(searchParams);

    params.set('genre', genre);

    setSearchParams(params);
  }
  return (
    <div className='flex gap-4'>
      {genres.map((genreArrElement) => {
        const isActive = genreArrElement === genre;

        return (
          <button
            key={genreArrElement}
            className={`cursor-pointer px-4 py-2 rounded-2xl border ${isActive ? 'bg-black text-white' : ''}`}
            onClick={() => handleGenre(genreArrElement)}
          >
            {genreArrElement}
          </button>
        );
      })}
    </div>
  );
}
