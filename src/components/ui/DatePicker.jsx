import { useState } from "react";

export default function DatePicker({ value, onChange }) {
  const [current, setCurrent] = useState(new Date());

  // ✅ Today (normalized)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = new Date(
    current.getFullYear(),
    current.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    current.getFullYear(),
    current.getMonth(),
    1
  ).getDay();

  // 🔥 Prevent going before current month
  const isCurrentMonth =
    current.getMonth() === today.getMonth() &&
    current.getFullYear() === today.getFullYear();

  const prevMonth = () => {
    if (!isCurrentMonth) {
      setCurrent(
        new Date(current.getFullYear(), current.getMonth() - 1, 1)
      );
    }
  };

  const nextMonth = () =>
    setCurrent(
      new Date(current.getFullYear(), current.getMonth() + 1, 1)
    );

  const selectDate = (day) => {
    const date = new Date(
      current.getFullYear(),
      current.getMonth(),
      day
    );
    onChange(date);
  };

  return (
    <div className="absolute bg-white shadow-xl rounded-xl p-4 mt-2 w-[260px] z-50">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={prevMonth}
          disabled={isCurrentMonth}
          className="disabled:opacity-30"
        >
          ←
        </button>

        <span className="font-medium">
          {current.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>

        <button onClick={nextMonth}>→</button>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty spaces */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={i}></span>
        ))}

        {/* Dates */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;

          const dateObj = new Date(
            current.getFullYear(),
            current.getMonth(),
            day
          );

          const isPast = dateObj < today;

          const isSelected =
            value &&
            new Date(value).getDate() === day &&
            new Date(value).getMonth() === current.getMonth() &&
            new Date(value).getFullYear() === current.getFullYear();

          return (
            <button
              key={day}
              onClick={() => !isPast && selectDate(day)}
              disabled={isPast}
              className={`text-sm rounded-lg py-1 ${
                isSelected
                  ? "bg-purple-600 text-white"
                  : isPast
                  ? "text-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}