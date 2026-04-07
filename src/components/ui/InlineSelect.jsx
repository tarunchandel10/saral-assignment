import { useState, useEffect, useRef } from "react";

export default function InlineSelect({
  placeholder,
  options = [],
  value,
  onChange,
  renderExtra,
  footer,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ handle dynamic selection (VERY IMPORTANT)
  const isSelected = (opt) => {
    if (!value) return false;

    if (opt.value.includes("$X")) {
      const base = opt.value.split("$X")[0];
      return value.startsWith(base);
    }

    if (opt.value.includes("Posts X")) {
      return value.startsWith("Posts");
    }

    if (opt.value === "Upgrade Commission Tier") {
      return value.startsWith("Upgrade to");
    }

    return value === opt.value;
  };

  const getDynamicLabel = (opt) => {
  if (!value) return opt.label;

  // Cross $X
  if (opt.value === "Cross $X in sales" && value.includes("$")) {
    return value;
  }

  // Flat $X
  if (opt.value === "Flat $X bonus" && value.includes("$")) {
    return value;
  }

  // Posts X times
  if (
    opt.value === "Posts X times per Y period" &&
    value.startsWith("Posts")
  ) {
    return value;
  }

  // Upgrade Tier
  if (
    opt.value === "Upgrade Commission Tier" &&
    value.startsWith("Upgrade to")
  ) {
    return value;
  }

  return opt.label;
};

  return (
    <div ref={ref} className="border border-gray-200 rounded-lg overflow-hidden">
      
      {/* Selected */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className="px-3 py-3 flex justify-between items-center cursor-pointer border-b"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || placeholder}
        </span>

        <svg
        className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        >
        <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="bg-white">

          {options.map((opt, index) => {
            const isDisabled = opt.disabled;

            return (
              <div key={index}>
                
                {/* Option Row */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isDisabled) return;
                    onChange(opt.value);
                  }}
                  className={`px-3 py-2 ${
                    isDisabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "cursor-pointer hover:bg-gray-100"
                  } ${
                    isSelected(opt)
                      ? "bg-purple-50 text-[#C530C5]"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between w-full group">
                    
                    <span>{getDynamicLabel(opt)}</span>

                    <div className="flex items-center gap-2">

                      {/* ✔ Selected */}
                      {isSelected(opt) && !isDisabled && <span>✔</span>}

                      {/* ✏️ Edit icon (FINAL FIX) */}
                      {opt.value === "Upgrade Commission Tier" &&
                        isSelected(opt) &&
                        value &&
                        value.startsWith("Upgrade to") && (
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              window.dispatchEvent(new Event("edit-tier"));
                            }}
                            className="opacity-0 group-hover:opacity-100 transition cursor-pointer"
                          >
                            ✏️
                          </span>
                        )}
                    </div>
                  </div>
                </div>

                {/* Extra UI */}
                {isSelected(opt) && renderExtra && (
                  <div
                    className="px-3 pb-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {renderExtra(opt.value)}
                  </div>
                )}
              </div>
            );
          })}

          {/* Footer */}
          {footer && (
            <div className="flex gap-3 p-3 border-t">
              {footer({ close: () => setOpen(false) })}
            </div>
          )}

        </div>
      )}
    </div>
  );
}