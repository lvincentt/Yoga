// src/components/yoga/schedule/ListView.jsx
import { useState } from "react";
import { DAYS, scheduleData } from "./scheduleData";
import ClassCard from "./ClassCard";

const DAY_LABELS = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export default function ListView({ filteredIds, onSelectClass }) {
  // Default: hari ini (atau Senin kalau hari ini gak ada di DAYS)
  const [openDay, setOpenDay] = useState(() => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    return DAYS.includes(today) ? today : DAYS[0];
  });

  const grouped = DAYS.map((day) => ({
    day,
    classes: scheduleData.filter(
      (c) => c.day === day && filteredIds.includes(c.id),
    ),
  })).filter((g) => g.classes.length > 0);

  if (grouped.length === 0) {
    return (
      <div className="text-center py-16 sm:py-20 px-4">
        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧘</div>
        <p className="text-stone-700 text-base sm:text-lg font-medium">
          No classes match your filters.
        </p>
        <p className="text-stone-400 text-xs sm:text-sm mt-1.5">
          Try adjusting the filters above.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ===== MOBILE: Accordion per hari ===== */}
      <div className="lg:hidden space-y-2.5">
        {grouped.map(({ day, classes }) => {
          const isOpen = openDay === day;
          const availableCount = classes.filter((c) => c.spots > 0).length;

          return (
            <div
              key={day}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-emerald-200 bg-white shadow-sm"
                  : "border-stone-100 bg-white/60"
              }`}
            >
              {/* Header — selalu klikable */}
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? null : day)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-stone-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-1 h-8 rounded-full bg-gradient-to-b shrink-0 ${
                      isOpen
                        ? "from-emerald-400 to-emerald-600"
                        : "from-stone-300 to-stone-300"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-base text-stone-900 leading-tight">
                      {DAY_LABELS[day]}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {classes.length} class{classes.length !== 1 ? "es" : ""}
                      {availableCount > 0 && (
                        <span className="text-emerald-600">
                          {" "}
                          · {availableCount} available
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {availableCount === 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 font-medium">
                      Full
                    </span>
                  )}
                  <svg
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Body — collapsible pakai grid trick */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3 pb-3 pt-1 space-y-2.5">
                    {classes.map((cls) => (
                      <ClassCard
                        key={cls.id}
                        cls={cls}
                        onClick={() => onSelectClass?.(cls)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== DESKTOP: Grid 2 kolom (seperti sebelumnya) ===== */}
      <div className="hidden lg:block space-y-10">
        {grouped.map(({ day, classes }) => (
          <div key={day}>
            <div className="flex items-center gap-4 mb-5">
              <h3 className="font-serif text-2xl text-stone-900 whitespace-nowrap">
                {DAY_LABELS[day]}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent" />
              <span className="text-sm text-stone-500 whitespace-nowrap">
                {classes.length} class{classes.length !== 1 ? "es" : ""}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {classes.map((cls) => (
                <ClassCard
                  key={cls.id}
                  cls={cls}
                  onClick={() => onSelectClass?.(cls)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
