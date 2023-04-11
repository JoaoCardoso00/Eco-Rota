import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CalendarComponent } from './Calendar/Calendar';

type DatePickerProps = {
  currentDate: string;
  setDate: (value: Date) => void;
  date: Date | (Date | null)[] | null;
};

export function DatePicker({ date, setDate, currentDate }: DatePickerProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex h-full cursor-pointer items-center gap-2 border-x-0 border-gray-400">
          <img
            src="/icons/Calendar.svg"
            alt="icone de um calendario"
            className="aspect-square h-8"
          />
          <span className="whitespace-nowrap">{currentDate}</span>
          <img
            src="/icons/ChevronDown.svg"
            alt="seta pra baixo"
            className="aspect-square h-6"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-20 z-10 mt-6 w-96 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <CalendarComponent value={date} onChange={setDate} />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
