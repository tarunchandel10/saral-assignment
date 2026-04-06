import { useState } from "react";

export default function CustomSelect({
  placeholder,
  options = [],
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      
      {/* Input */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <span>⌄</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-md z-10">
          {options.map((opt, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}