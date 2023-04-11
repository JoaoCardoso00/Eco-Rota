import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

type CalendarProps = {
  onChange: (value: Date) => void;
  value: Date | (Date | null)[] | null;
};

export function CalendarComponent({ onChange, value }: CalendarProps) {
  return (
    <Calendar
      locale="pt-BR"
      onChange={(nextValue) => onChange(nextValue as Date)}
      value={value as Date}
    />
  );
}
