import { useSearchParams } from 'react-router-dom';
import FilterButton from '../components/FilterButton';

export default function Songs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre');
  const mood = searchParams.get('mood');

  const genres = ['pop', 'rock', 'jazz'];
  const moods = ['happy', 'sad', 'chill'];
  return (
    <>
      <FilterButton
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        filterName='genre'
        options={genres}
        currentValue={genre}
      />

      <p>{genre} Music</p>

      <FilterButton
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        filterName='mood'
        options={moods}
        currentValue={mood}
      />

      <p>{mood} Music</p>
    </>
  );
}

{
  /* <GenreButton
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        genre={genre}
      />

      <p>{genre} Music</p>

      <MoodButton
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        mood={mood}
      />

      <p>{mood} Music</p> */
}
