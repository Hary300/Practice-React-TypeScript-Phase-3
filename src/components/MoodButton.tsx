import type { SetURLSearchParams } from 'react-router-dom';

type MoodButtonProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  mood: string | null;
};

export default function MoodButton({
  searchParams,
  setSearchParams,
  mood,
}: MoodButtonProps) {
  const moods = ['happy', 'sad', 'chill'];
  function handleMood(mood: string) {
    const params = new URLSearchParams(searchParams);
    params.set('mood', mood);

    setSearchParams(params);
  }
  return (
    <div className='flex gap-4'>
      {moods.map((moodArrElement) => {
        const isActive = moodArrElement === mood;

        return (
          <button
            key={moodArrElement}
            className={`cursor-pointer px-4 py-2 rounded-2xl border ${isActive ? 'bg-black text-white' : ''}`}
            onClick={() => handleMood(moodArrElement)}
          >
            {moodArrElement}
          </button>
        );
      })}
    </div>
  );
}
