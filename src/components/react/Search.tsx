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
    <div className="flex flex-col items-center md:h-16 md:flex-row">
      <div className="flex h-full w-full items-center">
        <div className="flex h-full cursor-pointer items-center justify-center rounded-tl-xl border border-r-0 border-gray-400 py-4 pl-4 pr-2 md:rounded-l-xl">
          <img
            src="/icons/Search.svg"
            alt="bussola"
            className="aspect-square h-10"
          />
        </div>
        <input
          type="text"
          placeholder="Para onde vamos?"
          className="rounded-t-0 md:rounded-tr-0 h-full w-full rounded-tr-xl border border-l-0 border-gray-400 bg-transparent py-6 px-2 md:rounded-tr-none md:border-r-0"
        />
      </div>
      <div className="flex h-full w-full cursor-pointer items-center gap-2 border border-t-0 border-gray-400 py-4 pl-4 md:w-60 md:border-x-0 md:border-y md:border-l md:pr-20">
        <DatePicker date={date} setDate={setDate} currentDate={formattedDate} />
      </div>
      <button className="h-full w-full rounded-b-xl bg-green-800 py-6 px-12 text-white hover:bg-green-700 md:w-96 md:rounded-r-xl md:rounded-bl-none">
        Pesquisar
      </button>
    </div>
  );
}
