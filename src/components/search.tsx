export function Search() {
  return (
    <div className="flex h-16 items-center">
      <div className="flex h-full w-full items-center">
        <div className="flex h-full items-center justify-center rounded-l-xl border border-r-0 border-gray-400 py-4 pl-4 pr-2">
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
        <img
          src="/icons/Calendar.svg"
          alt="icone de um calendario"
          className="aspect-square h-8"
        />
        <span className="whitespace-nowrap">24 mar 2023</span>
        <img
          src="/icons/ChevronDown.svg"
          alt="seta pra baixo"
          className="aspect-square h-10"
        />
      </div>
      <button className="h-full rounded-r-xl bg-green-800 px-12 text-white hover:bg-green-700">
        Pesquisar
      </button>
    </div>
  );
}
