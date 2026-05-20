import type { SetURLSearchParams } from 'react-router-dom';

type FilterName = 'genre' | 'mood';

type FilterButtonProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  filterName: FilterName;
  options: string[];
  currentValue: string | null;
};

export default function FilterButton({
  searchParams,
  setSearchParams,
  filterName,
  options,
  currentValue,
}: FilterButtonProps) {
  function handleFilter(filterName: string, type: string) {
    const params = new URLSearchParams(searchParams);

    params.set(filterName, type);

    setSearchParams(params);
  }

  return (
    <div className='flex gap-4'>
      {options.map((option) => {
        const isActive = option === currentValue;

        return (
          <button
            key={option}
            className={`cursor-pointer px-4 py-2 rounded-2xl border transition ${isActive ? 'bg-black text-white' : ''}`}
            onClick={() => handleFilter(filterName, option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
