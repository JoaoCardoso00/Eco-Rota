import { useState } from 'react';
import { DatePicker } from './DatePicker';

export function Search() {
  const [date, setDate] = useState<Date | null | (Date | null)[]>(new Date());

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
    .format(date as Date)
    .split(' de ')
    .join(' ');

  return (
    <div className="flex h-16 items-center">
      <div className="flex h-full w-full items-center">
        <div className="flex h-full cursor-pointer items-center justify-center rounded-l-xl border border-r-0 border-gray-400 py-4 pl-4 pr-2">
          <img
            src="/icons/Search.svg"
            alt="bussola"
            className="aspect-square h-10"
          />
        </div>
        <input
          type="text"
          placeholder="Para onde vamos?"
          className="h-full w-full border border-l-0 border-gray-400 bg-transparent py-6 px-2"
        />
      </div>
      <div className="flex h-full cursor-pointer items-center gap-2 border border-x-0 border-gray-400 pl-4 pr-20">
        <DatePicker date={date} setDate={setDate} currentDate={formattedDate} />
      </div>
      <button className="h-full rounded-r-xl bg-green-800 px-12 text-white hover:bg-green-700">
        Pesquisar
      </button>
    </div>
  );
}
